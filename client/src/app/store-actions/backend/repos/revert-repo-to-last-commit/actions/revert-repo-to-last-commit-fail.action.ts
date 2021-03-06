import { Action } from '@ngrx/store';
import * as actionTypes from '@app/store-actions/action-types';

export class RevertRepoToLastCommitFailAction implements Action {
  readonly type = actionTypes.REVERT_REPO_TO_LAST_COMMIT_FAIL;

  constructor(public payload: { error: any }) {}
}
