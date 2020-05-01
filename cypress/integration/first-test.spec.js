describe('First test', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit('/');
  });

  describe('Visual regression tests', () => {
    it('Should match previous screenshot "about Page"', () => {
      // cy.wait(500);

      cy.matchImageSnapshot('all', {
        blackout: ['body'],
      });
    });
  });
  /*
  it('title should be', () => {
    cy.title().should('include', 'Angular Communities');
  });

  it('title should be', () => {
    cy.title().should('include', 'Angular Communities');
  });

  it('should visit login page', () => {
    cy.get('.cdk-virtual-scroll-content-wrapper > :nth-child(1)').click();
    cy.get('.mat-drawer-content > :nth-child(1) > img');
    // cy.url().should('include', '/register');
  });

  it('.scrollIntoView() - scroll an element into view', () => {
    // https://on.cypress.io/scrollintoview

    // normally all of these buttons are hidden,
    // because they're not within
    // the viewable area of their parent
    // (we need to scroll to see them)
    cy.get('.cdk-virtual-scroll-content-wrapper > :nth-child(1)').should('be.visible');
    cy.get('.community-preview-list-container').scrollTo('bottom');
    // scroll the button into view, as if the user had scrolled
    cy.get('.cdk-virtual-scroll-content-wrapper').scrollIntoView().should('be.visible');
  }); */
});
