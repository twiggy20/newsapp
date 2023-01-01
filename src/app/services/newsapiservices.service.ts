import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) { }

  //api Url
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apikey=<<ea968b264d3246729745e87b8ea33aa7>>&page=1"
   myUrl="https://newsapi.org/v2/top-headlines?country=ng&apiKey=ea968b264d3246729745e87b8ea33aa7"

   CategoryApiUrl="https://newsapi.org/v2/top-headlines?category=<<news_category>>&apikey=<<api_key>>&page=1"
   techApiUrl="https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=ea968b264d3246729745e87b8ea33aa7"
  topheadlines():Observable<any>
  {
    return this.http.get(this.myUrl);
  }
  category():Observable<any>
  {
    return this.http.get(this.CategoryApiUrl);
  }
  technews():Observable<any>
  {
    return this.http.get(this.techApiUrl);
  }
}
