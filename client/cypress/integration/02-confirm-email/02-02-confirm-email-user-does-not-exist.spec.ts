import * as constants from '../../../src/app/constants/_index';
import * as api from '../../../src/app/api/_index';

const error1 =
  api.ServerResponseStatusEnum.CONFIRM_EMAIL_ERROR_USER_DOES_NOT_EXIST;

describe('02-02 confirm-email-user-does-not-exist (logged out, notExistingToken)', () => {
  it(`should see ${error1}, redirect to ${constants.PATH_LOGIN}`, () => {
    cy.basicVisit(constants.PATH_CONFIRM_EMAIL + '?token=notExistingToken');
    cy.loading();
    cy.url().should('include', constants.PATH_LOGIN);
    cy.get('[data-cy=dialogInfoMessage]').should('contain', error1);
  });
});
