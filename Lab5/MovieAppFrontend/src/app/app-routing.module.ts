import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"add-movie", component:AddMovieComponent},
    {path:"search-movie",component:SearchMovieComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
