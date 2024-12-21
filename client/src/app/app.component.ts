import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { ProductService } from './products.service';
import { NgIf } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import {FirestoreService} from './services/firestore.service';
import axios, {RawAxiosRequestHeaders} from 'axios';
import {logEvent} from '@angular/fire/analytics';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, MatIcon, RouterLinkActive, NgIf, MatIconButton, FormsModule,LoginComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FirebaseTSFirestore] // Provide FirebaseTSFirestore here
})
export class AppComponent implements OnInit {
  private firestore = new FirebaseTSFirestore();
  title = 'client';
  isSearchPopupVisible: any;
  searchQuery = '';
  username: string | null = null;
  email: string | null = null;
  password: string | null = null;

  constructor(
    private route: Router,
    private firestoreService: FirestoreService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.firestore = new FirebaseTSFirestore();
    this.onCurrent();
  }

  toggleSearchBar() {
    this.isSearchPopupVisible = !this.isSearchPopupVisible; // Bật/tắt thanh tìm kiếm
  }

  closeSearchPopup() {
    this.isSearchPopupVisible = false;
  }

  onCurrent() {
    if (isPlatformBrowser(this.platformId)) {
      const accessToken = localStorage.getItem('accessToken');

      const currentUrl = this.route.url
      const publicRoutes = [ '/forgot-password', '/album1','/album2', '/home','/register'];

      if (publicRoutes.some(route => currentUrl.startsWith(route))) {
        return;
      }

      if (accessToken) {
        axios.get('http://localhost:8000/api/users/current', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          },
          withCredentials: true
        })
          .then((res) => {
            const { username, email } = res.data;
            localStorage.setItem('email', email);  // Lưu email
            localStorage.setItem('username', username);  // Lưu username
            alert('Chào mừng bạn đã quay trở lại');
          })
          .catch(() => {
            this.route.navigate(['/login']);
            alert('Phiên làm việc đã hết hạn');
          });
      } else {
        this.route.navigate(['/login']);
        alert('Vui lòng đăng nhập để tiếp tục');
      }
    }
  }






  searchProducts(query: string) {
    if (!query.trim()) {
      console.warn('Vui lòng nhập từ khóa tìm kiếm');
      return;
    }
    console.log('Tìm kiếm sản phẩm với từ khóa:', query);
    this.closeSearchPopup();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.username = localStorage.getItem('username');
      console.log('Username from localStorage:', this.username);

    }

    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      this.firestore.getDocument({
        path: ['products', '1'],
        onComplete: (result) => {
          // console.log('Document data:', result.data());
        },
        onFail: (error) => {
          console.error('Error fetching document:', error);
        }
      })
        // .then(r => console.log(r));
    }

  }
  logout() {
    // Xóa accessToken và username khỏi localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    localStorage.removeItem('email');

    // Xóa bất kỳ cookie nào có liên quan đến phiên làm việc (nếu có)
    // Xóa cookie accessToken
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;

    // Cũng có thể cần xóa các cookie khác nếu có, ví dụ:
    document.cookie = 'otherCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;

    // Xóa sessionStorage nếu có
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('username');

    // Đặt lại các giá trị trong component
    this.username = null;
    this.email = null;

    // Cảnh báo hoặc thông báo người dùng
    alert('Bạn đã đăng xuất');

    // Điều hướng người dùng đến trang đăng nhập
    this.route.navigate(['/login']);
  }


  }






