import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from './movie';
import {setListOfMovies} from '../store/movie-list/movie-list.actions';
import {setSearchParams} from '../store/movie-search/movie-search.actions';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesUrl: string;
  private API_KEY = 'f79aeba3';

  constructor(private http: HttpClient, private store: Store) {
  }

  getMovies(searchParams = {
              title: 'movie',
              year: '',
              type: 'movie'
            }
  ) {
    this.moviesUrl = `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${searchParams.title}&y=${searchParams.year}&type=${searchParams.type}`;
    return this.http.get(this.moviesUrl).pipe(
      map((response: any) => {
          return response.Search;
        }
      )).subscribe(response => {
      this.store.dispatch(
        setListOfMovies({
          movies: response
        }),
      );
      this.store.dispatch(
        setSearchParams({
          params: searchParams
        }));
    });
  }

  getMovie(movie: string): Observable<Movie> {
    this.moviesUrl = `http://www.omdbapi.com/?apikey=${this.API_KEY}&`;
    return this.http.get<Movie>(this.moviesUrl + 'i=' + movie);
  }
}
