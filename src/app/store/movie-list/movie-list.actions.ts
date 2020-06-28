import {createAction, props} from '@ngrx/store';
import {Movie} from '../../movies/movie';

export const setListOfMovies = createAction(
  '[List Of Movies] Set',
  props<{ movies: Movie[] }>()
);

export const clearListOfMovies = createAction('[List of Movies] Clear');
