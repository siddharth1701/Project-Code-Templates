import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopheadlineComponent } from "./topheadline/topheadline.component";
import { HttpClientModule } from "@angular/common/http";
import { NewsapiService } from "./service/newsapi.service";
import { TechnewsComponent } from "./technews/technews.component";
import { BusnewsComponent } from "./busnews/busnews.component";
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
import { GeneralnewsComponent } from './generalnews/generalnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechnewsComponent,
    BusnewsComponent,
    GeneralnewsComponent,
    HealthnewsComponent,
    SciencenewsComponent,
    SportsnewsComponent,
    EntertainmentnewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
