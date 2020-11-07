import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TranslatePipe} from './pipes/translate.pipe';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app.routing.module';
import {CarouselComponent} from './components/home/carousel/carousel.component';
import {BasicInfoComponent} from './components/home/basic-info/basic-info.component';
import {LanguagePickerComponent} from './components/header/language-picker/language-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent} from './components/footer/footer.component';
import {CommonModule} from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {CarouselItemComponent} from './components/home/carousel/carousel-item/carousel-item.component';
import {TranslateService} from './services/translate.service';
import {NewsService} from './services/news.service';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';
import {SellInfoComponent} from './components/sell-info/sell-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    BasicInfoComponent,
    LanguagePickerComponent,
    FooterComponent,
    CarouselItemComponent,
    ContactComponent,
    AboutComponent,
    SellInfoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [
    TranslatePipe,
    TranslateService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
