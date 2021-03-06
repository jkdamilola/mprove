import * as constants from '../../../src/app/constants/_index';
import * as api from '../../../src/app/api/_index';
import * as enums from '../../../src/app/enums/_index';

const userId = '12-09-user@example.com';
const password = '123123';

const projectId = 'project_12_09';

describe('12-09 blockml-delete-file-success (logged in)', () => {
  it(`should be able to delete file`, () => {
    cy.deletePack({
      user_ids: [userId],
      project_ids: [projectId]
    });
    cy.seedPack({
      users: [
        {
          user_id: userId,
          password: password,
          email_verified: true
        }
      ],
      members: [
        {
          project_id: projectId,
          member_id: userId,
          is_admin: true,
          is_editor: true
        }
      ],
      projects: [
        {
          project_id: projectId,
          has_credentials: false
        }
      ]
    });
    cy.loginUser({ user_id: userId, password: password });
    cy.basicVisit(
      `${constants.PATH_PROJECT}/${projectId}/${constants.PATH_MODE}/${
        enums.LayoutModeEnum.Dev
      }/${constants.PATH_BLOCKML}`
    );
    cy.loading();
    cy.contains('readme.md').should('exist');
    cy.get('[data-cy=blockmlTreeFileOptionsButton]')
      .eq(1)
      .invoke('show')
      .click();
    cy.get('[data-cy=blockmlTreeFileOptionsDeleteFileButton]').click();
    cy.get('[data-cy=dialogDeleteFileDeleteButton]').click();
    cy.loading();
    cy.contains('readme.md').should('not.exist');
    cy.get('[data-cy=blockmlHintTitle]').should('exist');
    cy.get('[data-cy=blockmlCommitButton]').should('be.enabled');
    cy.get('[data-cy=blockmlPullButton]').should('not.be.visible');
    cy.get('[data-cy=blockmlPushToProductionButton]').should('be.disabled');
    cy.get('[data-cy=blockmlOptionsButton]').should('be.enabled');
  });
});
