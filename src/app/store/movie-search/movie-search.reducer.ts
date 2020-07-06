import {createReducer, on} from '@ngrx/store';
import {setSearchParams, clearSearchParams} from './movie-search.actions';
import {SearchParams} from '../../movies/searchParams';

export const initialState: SearchParams = {
  title: 'movie',
  year: '',
  type: 'Movie'
};

const searchParamsReducer = createReducer(
  initialState,
  on(setSearchParams, (state, {params}) => {
    return params;
  }),
  on(clearSearchParams, (state) => {
    return {};
  })
);

export function searchParamsReducerWrapper(state, action) {
  return searchParamsReducer(state, action);
}
