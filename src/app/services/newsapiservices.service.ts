import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  newsApiUrl:string="https://newsapi.org/v2/top-headlines?country=in&apikey=ea968b264d3246729745e87b8ea33aa7&page=1"
  //  myUrl="https://newsapi.org/v2/top-headlines?country=ng&apiKey=ea968b264d3246729745e87b8ea33aa7"

    searchUrl="https://newsapi.org/v2/everything?q=<>&apiKey=ea968b264d3246729745e87b8ea33aa7&language=en&page=1"
    // searchUrl= "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ea968b264d3246729745e87b8ea33aa7"
    
   techApiUrl="https://newsapi.org/v2/top-headlines?category=technology&apikey=ea968b264d3246729745e87b8ea33aa7&page=1"
   businessApiUrl="https://newsapi.org/v2/top-headlines?category=business&apikey=ea968b264d3246729745e87b8ea33aa7&page=1"
   
  constructor(private http:HttpClient) { }

  //api Url
   topheadlines():Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }
  technews():Observable<any>
  {
    return this.http.get(this.techApiUrl);
  }
  businessnews():Observable<any>
  {
    return this.http.get(this.businessApiUrl);
  }

  getNews(news:string):Observable<any>{
    return this.http.get(this.searchUrl)
  }
}
