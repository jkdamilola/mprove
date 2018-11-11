import { Action } from '@ngrx/store';
import * as api from 'app/api/_index';
import * as actionTypes from 'app/store/action-types';

export class MoveFileAction implements Action {
  readonly type = actionTypes.MOVE_FILE;

  constructor(public payload: api.MoveFileRequestBodyPayload) {
  }
}
