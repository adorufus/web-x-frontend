import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { BannerComponent } from './components/dashboard/banner/banner.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpModule } from './modules/http/http.module';
import { environment } from 'src/environments/environment.prod';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer/footer.component';
import { AllNewsComponent } from './components/news/all-news/all-news.component';
import { NewsDetailsComponent } from './components/news/news-details/news-details.component';
import { NewsCardComponent } from './components/news/news-details/news-card/news-card.component';
import { WorksComponent } from './components/works/works.component';
import { WorkDetailsComponent } from './components/works/work-details/work-details.component';
import { AllWorksComponent } from './components/works/all-works/all-works.component';
import { AboutPageComponent } from './components/about-us/about-page/about-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeaderComponent,
    BannerComponent,
    NewsComponent,
    NewsItemComponent,
    AboutUsComponent,
    FooterComponent,
    AllNewsComponent,
    NewsDetailsComponent,
    NewsCardComponent,
    WorksComponent,
    WorkDetailsComponent,
    AllWorksComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpModule.forRoot({ environment }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
