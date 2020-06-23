import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  constructor(private moviesService: MoviesService) { }
  ngOnInit(): void {
    this.getMovies(this.moviesService.getLastSearch());
  }

  getMovies(search?): void {
    if (search) {
      this.moviesService.setLastSearch(search);
    }
    this.moviesService.getMovies(search).subscribe(data => this.movies = data.Search);
  }
}
