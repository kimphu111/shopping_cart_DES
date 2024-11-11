import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Đảm bảo file này đã được định nghĩa đúng
import { AppComponent } from './app/app.component';
import { AppRoutesModule } from './app/app.routes'; // Đảm bảo file này đã được định nghĩa đúng
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutesModule), provideAnimationsAsync(), provideAnimationsAsync() // Nhập providers từ AppRoutesModule nếu cần
  ]
}).catch((err) => console.error(err));
