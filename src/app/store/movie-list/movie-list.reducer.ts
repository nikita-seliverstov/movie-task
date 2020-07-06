import {createReducer, on} from '@ngrx/store';
import {setListOfMovies, clearListOfMovies} from './movie-list.actions';
import {Movie} from '../../movies/movie';

export const initialState: Movie[] = null;

const movieListReducer = createReducer(
  initialState,
  on(setListOfMovies, (state, {movies}) => {
    return movies;
  }),
  on(clearListOfMovies, (state) => {
    return {};
  })
);

export function movieListReducerWrapper(state, action) {
  return movieListReducer(state, action);
}
