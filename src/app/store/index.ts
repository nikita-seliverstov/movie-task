import {movieListReducerWrapper} from './movie-list/movie-list.reducer';
import {searchParamsReducerWrapper} from './movie-search/movie-search.reducer';

export const reducers = {
  movieList: movieListReducerWrapper,
  searchParams: searchParamsReducerWrapper
};
