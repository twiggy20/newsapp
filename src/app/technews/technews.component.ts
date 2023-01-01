import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  techDisplay:any=[]
  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.technews().subscribe((result)=>{
      console.log(result);
      this.techDisplay=result.articles;
    })
  }
 save(){
  
 }
}
