import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie';
import { Store } from '@ngrx/store';
import {selectMovieList} from '../../store/movie-list/movie-list.selectors';
import {selectSearchParams} from '../../store/movie-search/movie-search.selectors';
import {SearchParams} from '../searchParams';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Observable<Movie[]>;
  searchParams: SearchParams;
  constructor(private moviesService: MoviesService, private store: Store, asyncPipe: AsyncPipe) {
    this.movies = store.select(selectMovieList);
    this.searchParams =  asyncPipe.transform(store.select(selectSearchParams));
  }
  ngOnInit(): void {
    this.getMovies(this.searchParams);
  }

  getMovies(search?): void {
    this.moviesService.getMovies(search);
  }
}
