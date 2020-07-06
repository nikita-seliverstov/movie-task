import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SearchParams} from '../../movies/searchParams';

const searchParams = createFeatureSelector<SearchParams>('searchParams');
export const selectSearchParams = createSelector(
  searchParams,
  (item) => item
);
