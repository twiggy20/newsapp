import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
const routes: Routes = [
    {path:"",component:TopheadingComponent},
    {path:"category",component:NewsCategoryComponent},
    {path:"tech",component:TechnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
