import { Component,OnInit  } from '@angular/core';
import {NavigationEnd, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, MatIcon, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements  OnInit{
  constructor(private route: Router) {}

  title = 'client';
  isSearchPopupVisible: any;
  searchProducts(value: string) {}

  ngOnInit() {
    //Ham cuon len dau trang khi chuyen trang
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({top:0, behavior:'smooth'});
      }
    });
  }
}
