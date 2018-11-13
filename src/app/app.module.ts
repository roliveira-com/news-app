import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PageSliderComponent } from './views/page-slider/page-slider.component';

import { NewsService } from './services/news.service';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageSliderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NguCarouselModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
