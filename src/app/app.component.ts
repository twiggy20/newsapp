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
  title = 'newsApp';
  titles:any=[]
  links:any=[]
  searchForm:FormGroup=new FormGroup({search:new FormControl('')})
  public searchList:Array<any>=[]
  filterText: string='';
// filterText: string;

    constructor(private service:NewsapiservicesService){
      this.searchForm.get('search')?.valueChanges.pipe
      (
        // debounceTime(1000),
        // distinctUntilChanged(),
         switchMap((v)=>this.service.getNews(v)),
      ).subscribe((v)=>{
        this.searchList=v.articles
        console.log('search list result', this.searchList)

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
