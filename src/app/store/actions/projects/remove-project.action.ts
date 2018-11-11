import { Action } from '@ngrx/store';
import * as actionTypes from 'app/store/action-types';

export class RemoveProjectAction implements Action {
  readonly type = actionTypes.REMOVE_PROJECT;

  constructor(public payload: string) {
  }
}
