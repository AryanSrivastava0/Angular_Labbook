import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  allMovies =[];
  movies=[];
  movieGenre:string;
  tempGenre:string;
  message:string;
  constructor(private ds:DataService) {
    
   }

  ngOnInit(): void {
    this.ds.getMovies().subscribe(data=> this.allMovies=data);
    document.getElementById("moviesTable").style.display="none";
  }
  searchMovie()
  {
    this.movieGenre=this.tempGenre;
    this.movies=[];
    for(var i=0;i<this.allMovies.length;i++)
    {
      if(this.allMovies[i].moviesGenre == this.movieGenre)
      {
        this.movies.push(this.allMovies[i]);
      }
    }
    if(this.movies.length!=0)
    {
      console.log(this.movies.length);
      document.getElementById("moviesTable").style.display="table";
      this.message=null;
    }
    else{
      document.getElementById("moviesTable").style.display="none";
      this.message="No '"+this.movieGenre.toUpperCase()+"' movies found. Please try another genre...";
      
    }
  }

}
