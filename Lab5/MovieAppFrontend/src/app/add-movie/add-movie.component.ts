import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/Movies';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private ds:DataService) {
   }

  message:string;
  movieName:string;
  movieRating:string;
  numMoviesRating:number;
  movieGenre:string;
  ngOnInit(): void {
    document.getElementById("message").style.display="none";
  }

  addMovie()
  {
    this.numMoviesRating=parseInt(this.movieRating);
    var movie = new Movies(this.movieName,this.numMoviesRating,this.movieGenre);
    this.ds.addMovie(movie).subscribe(data => {
      console.log(data);
      this.message="Movie Added Successfully [ Movie ID: "+data.moviesId+" ]";
    });
    (document.getElementById("addMovieForm") as HTMLFormElement).reset();
    document.getElementById("message").style.display="block";

  }
}
