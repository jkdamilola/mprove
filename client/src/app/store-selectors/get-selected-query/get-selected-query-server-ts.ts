import { createSelector } from '@ngrx/store';
import { getSelectedQuery } from '@app/store-selectors/get-selected-query/get-selected-query';
import * as api from '@app/api/_index';

export const getSelectedQueryServerTs = createSelector(
  getSelectedQuery,
  (query: api.Query) => (query ? query.server_ts : undefined)
);
