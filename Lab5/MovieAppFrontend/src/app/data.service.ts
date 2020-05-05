import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Movies } from 'src/Movies';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private httpClient:HttpClient) { }
  baseUrl:string = "http://localhost:9090/movies";
  addMovie(movie:Movies):Observable<Movies>{
    return this.httpClient.post<Movies>(this.baseUrl+'/add', JSON.stringify(movie), this.options);
  }
  getMovies():Observable<Movies[]>{
    return this.httpClient.get<Movies[]>(this.baseUrl+'/get',this.options);
  }
}
