import {Component, Output, EventEmitter} from '@angular/core';
import {MoviesService} from '../../movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  title: string;
  year: string;
  type: string;
  @Output() searchEvent = new EventEmitter();

  constructor(private moviesService: MoviesService) {
    this.type = 'Movie';
    if (this.moviesService.getLastSearch()) {
      const lastSearch = this.moviesService.getLastSearch();
      [this.title, this.year, this.type] = [lastSearch.title, lastSearch.year, lastSearch.type];
    }
  }

  callSearchEvent() {
    this.searchEvent.emit({title: this.title, year: this.year, type: this.type});
  }
}
