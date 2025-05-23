describe('Registration test on Demoblaze', () => {
  it('should register a new user', () => {
    const username = 'user' + Date.now();
    const password = 'testpass';

    cy.visit('https://www.demoblaze.com');

    cy.get('a[data-target="#signInModal"]').click();
    cy.get('#signInModal').should('be.visible');
    cy.wait(500); // Дать время окну отрисоваться

    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type(password);
    cy.get('button[onclick="register()"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Sign up successful');
    });
  });
});
