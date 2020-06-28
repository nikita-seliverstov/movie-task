import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Movie} from '../../movies/movie';

const movieList = createFeatureSelector<Movie[]>('movieList');
export const selectMovieList = createSelector(
  movieList,
  (item) => item
);
