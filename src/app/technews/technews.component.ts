import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  url:string='top-headlines?category=technology'
  techDisplay:any=[]
  titles:any=[]
  links:any=[]
  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.getNews(this.url).subscribe((result)=>{
      console.log(result);
      this.techDisplay=result.articles;
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
