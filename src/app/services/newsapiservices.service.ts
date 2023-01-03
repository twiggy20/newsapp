import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
   API_URL=environment.API_URL;
   API_Key=environment.API_Key;
  newsApiUrl:string="https://newsapi.org/v2/top-headlines?country=in&apikey=ea968b264d3246729745e87b8ea33aa7&page=1"
  //  myUrl="https://newsapi.org/v2/top-headlines?country=ng&apiKey=ea968b264d3246729745e87b8ea33aa7"

    searchApiUrl="https://newsapi.org/v2/everything?q=<>&apiKey=ea968b264d3246729745e87b8ea33aa7&language=en&page=1"
    // searchUrl= "https://newsapi.org/v2/everything?q=bitcoin&apiKey=ea968b264d3246729745e87b8ea33aa7"
    
   techApiUrl="https://newsapi.org/v2/top-headlines?category=technology&apikey=ea968b264d3246729745e87b8ea33aa7&page=1"
   businessApiUrl="https://newsapi.org/v2/top-headlines?category=business&apikey=ea968b264d3246729745e87b8ea33aa7&page=1"
   
  constructor(private http:HttpClient) { }

  //api Url
  topNews():Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }
  getNews(url: string):Observable<any>
  {
    return this.http.get(`${this.API_URL}/${url}&apikey=${this.API_Key}&page=1`);
  }
  
  search(category:string):Observable<any>{
    return this.http.get(`${this.API_URL}/everything?q=${category}&apikey=${this.API_Key}&page=1`)
  }
}
