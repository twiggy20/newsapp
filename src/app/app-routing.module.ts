import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
const routes: Routes = [
     {path:"",component:TopheadingComponent},
    {path:"business",component:BusinessnewsComponent},
    {path:"tech",component:TechnewsComponent},
    {path:"sports",component:SportnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
