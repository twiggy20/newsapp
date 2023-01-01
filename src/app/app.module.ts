import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { NewsapiservicesService } from './services/newsapiservices.service';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
// import { SearchPipePipe } from './search-pipe.pipe';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [ NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
