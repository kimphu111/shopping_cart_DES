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
import { User } from './models/user.model';
import { UserService } from '../service/user/user.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, MatIcon, RouterLinkActive, NgIf, MatIconButton, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FirebaseTSFirestore] // Provide FirebaseTSFirestore here
})
export class AppComponent implements OnInit {
  private firestore = new FirebaseTSFirestore();
  title = 'client';
  isSearchPopupVisible: any;
  searchQuery = '';

  isAdmin: boolean = false;

  constructor(
    private userService: UserService,
    private route: Router,
    private firestoreService: FirestoreService,
    // private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.firestore = new FirebaseTSFirestore();
  }

  toggleSearchBar() {
    this.isSearchPopupVisible = !this.isSearchPopupVisible; // Bật/tắt thanh tìm kiếm
  }

  closeSearchPopup() {
    this.isSearchPopupVisible = false;
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
    // this.firestoreService.setProductDocument('1', { name: 'product1', price: 100 });



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
          console.log('Document data:', result.data());
        },
        onFail: (error) => {
          console.error('Error fetching document:', error);
        }
      }).then(r => console.log(r));
    }
    this.CheckUser();
  }
  CheckUser(): void {
    this.userService.getUsers().subscribe(users => {
      const adminUser = users.find(user => user.role === 'Admin');
      this.isAdmin = !!adminUser;
    });
  }
}



