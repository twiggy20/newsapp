import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { NewsapiservicesService } from './services/newsapiservices.service';
// import{FormsModule, ReactiveForms}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles:any=[]
  links:any=[]
  // searchForm:FormGroup=new FormGroup({search:new FormControl('')})
  public searchList:Array<any>=[]
  filterText!: string;


    constructor(private service:NewsapiservicesService){}

    getCategory(){
      if ( this.filterText!='') {
        this.service.search(this.filterText).subscribe((result)=>{
          console.log('search is',result);
          this.searchList=result.articles;
        })
      }
      
      
    }
    save(description:any,link:any){
      this.links.push(link)
      this.titles.push(description)
      localStorage.setItem('Descriptions',JSON.stringify(this.titles))
      localStorage.setItem('links',JSON.stringify(this.links))
    // console.log('storage is',this.s)
    }
  
}
