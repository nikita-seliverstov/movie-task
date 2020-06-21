import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MovieResponse} from './movie-response';
import { map } from 'rxjs/operators';
import {Movie} from './movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl: string;
  lastSearch: {
    title: string,
    year: string,
    type: string
  };
  getLastSearch() {
    return  this.lastSearch;
  }
  setLastSearch(search) {
    this.lastSearch = search;
  }
  constructor(private http: HttpClient) {}
  getMovies(searchParams = {
    title: 'Default',
    year: '',
    type: 'movie'
  }
  ): Observable<MovieResponse>  {
    this.moviesUrl = `http://www.omdbapi.com/?apikey=f79aeba3&s=${searchParams.title}&y=${searchParams.year}&type=${searchParams.type}`;
    return this.http.get<MovieResponse>(this.moviesUrl);
  }
  getMovie(movie: string): Observable<Movie> {
    this.moviesUrl = `http://www.omdbapi.com/?apikey=f79aeba3&`;
    return this.http.get<Movie>(this.moviesUrl + 'i=' + movie);
  }
}
