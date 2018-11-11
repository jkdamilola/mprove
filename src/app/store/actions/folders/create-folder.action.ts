import { Action } from '@ngrx/store';
import * as api from 'app/api/_index';
import * as actionTypes from 'app/store/action-types';

export class CreateFolderAction implements Action {
  readonly type = actionTypes.CREATE_FOLDER;

  constructor(public payload: api.CreateFolderRequestBodyPayload) {
  }
}
