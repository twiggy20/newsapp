import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {
  url:string='top-headlines?category=business'
  businessDisplay:any=[]
  titles:any=[]
  links:any=[]
  // filterText:string=''
  
  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.getNews(this.url).subscribe((result)=>{
      console.log(result);
      this.businessDisplay=result.articles;
    })
   
  }
  save(description:any,link:any){
    this.links.push(link)
    this.titles.push(description)
    localStorage.setItem('Descriptions',JSON.stringify(this.titles))
    localStorage.setItem('links',JSON.stringify(this.links))
  // console.log('storage is',this.s)
  }

}