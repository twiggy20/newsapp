import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  url:string='top-headlines?country=in'
  headlinesDisplay:any=[]
  titles:any=[]
  links:any=[]
  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.getNews(this.url).subscribe((result)=>{
      console.log(result);
      this.headlinesDisplay=result.articles;
      // for (let index = 0; index <this.headlinesDisplay.length; index++) {
      //   // this.titles=this.titles.push(this.headlinesDisplay.title);
      //   console.log('title is',this.titles)
      //   // const element = array[index];
        
      // }
      
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
