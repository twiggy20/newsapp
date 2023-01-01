import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { NewsapiservicesService } from './services/newsapiservices.service';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    NewsCategoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [ NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
