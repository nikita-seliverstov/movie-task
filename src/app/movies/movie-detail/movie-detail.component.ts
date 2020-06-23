import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../movie';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(private route: ActivatedRoute,
              private movieService: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => {
      this.movie = movie;
    });
  }
}
