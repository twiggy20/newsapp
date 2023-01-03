import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { NewsapiservicesService } from './services/newsapiservices.service';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client'
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    SportnewsComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule, 
    FormsModule
   
  ],
  providers: [ NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
