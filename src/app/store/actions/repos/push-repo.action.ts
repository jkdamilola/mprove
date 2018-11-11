import { Action } from '@ngrx/store';
import * as api from 'app/api/_index';
import * as actionTypes from 'app/store/action-types';

export class PushRepoAction implements Action {
  readonly type = actionTypes.PUSH_REPO;

  constructor(public payload: api.PushRepoRequestBodyPayload) {
  }
}
