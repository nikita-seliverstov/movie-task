import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie';
import { Store } from '@ngrx/store';
import {selectMovieList} from '../../store/movie-list/movie-list.selectors';
import { setListOfMovies } from '../../store/movie-list/movie-list.actions';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Observable<Movie[]>;
  constructor(private moviesService: MoviesService, private store: Store) {
    this.movies = store.select(selectMovieList);
  }
  ngOnInit(): void {
    this.getMovies(this.moviesService.getLastSearch());
  }

  getMovies(search?): void {
    if (search) {
      this.moviesService.setLastSearch(search);
    }
    this.moviesService.getMovies(search);
  }
}
