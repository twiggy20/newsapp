import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.css']
})
export class NewsCategoryComponent implements OnInit {
  categoryDisplay:any=[]

  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.category().subscribe((result)=>{
      console.log(result);
      this.categoryDisplay=result.articles;
    })
   
  }
  save(){
    
  }

}
