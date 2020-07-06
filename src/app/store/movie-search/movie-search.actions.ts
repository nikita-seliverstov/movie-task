import {createAction, props} from '@ngrx/store';
import {SearchParams} from '../../movies/searchParams';

export const setSearchParams = createAction(
  'search Parameters Set',
  props<{ params: SearchParams }>()
);

export const clearSearchParams = createAction('search Parameters Clear');
