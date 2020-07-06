import {Component, Output, EventEmitter, Input} from '@angular/core';
import {MoviesService} from '../../movies.service';
import {selectSearchParams} from '../../../store/movie-search/movie-search.selectors';
import {Store} from '@ngrx/store';
import {SearchParams} from '../../searchParams';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  searchParams: SearchParams;
  title: string;
  year: string;
  type: string;
  @Output() searchEvent = new EventEmitter();

  constructor(private moviesService: MoviesService, private store: Store, asyncPipe: AsyncPipe) {
    this.searchParams = asyncPipe.transform(store.select(selectSearchParams));
    [this.title, this.year, this.type] = [this.searchParams.title, this.searchParams.year, this.searchParams.type];
  }

  callSearchEvent() {
    this.searchEvent.emit({title: this.title, year: this.year, type: this.type});
  }
}
