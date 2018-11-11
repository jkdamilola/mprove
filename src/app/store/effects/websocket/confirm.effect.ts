import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from 'app/store/actions/_index';
import * as actionTypes from 'app/store/action-types';
import * as services from 'app/services/_index';

@Injectable()
export class ConfirmEffect {

  @Effect() confirm$: Observable<Action> = this.actions$
    .ofType(actionTypes.CONFIRM)
    .pipe(
      mergeMap((action: actions.ConfirmAction) => this.backendService.confirm(action.payload)
        .pipe(
          map(body => new actions.ConfirmSuccessAction()),
          catchError(e => of(new actions.ConfirmFailAction({ error: e })))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private backendService: services.BackendService) {
  }
}
