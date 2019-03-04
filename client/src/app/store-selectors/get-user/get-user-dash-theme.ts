import { createSelector } from '@ngrx/store';
import * as interfaces from '@app/interfaces/_index';
import { getUserState } from '@app/store-selectors/get-state/get-user-state';

export const getUserDashTheme = createSelector(
  getUserState,
  (state: interfaces.UserState) => state.dash_theme
);