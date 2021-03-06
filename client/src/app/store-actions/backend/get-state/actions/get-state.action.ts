import { Action } from '@ngrx/store';
import * as api from '@app/api/_index';
import * as actionTypes from '@app/store-actions/action-types';

export class GetStateAction implements Action {
  type = actionTypes.GET_STATE;

  constructor(public payload: api.GetStateRequestBody['payload']) {}
}
