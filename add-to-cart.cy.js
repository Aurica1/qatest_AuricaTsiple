describe('Add to cart test on Demoblaze', () => {
  it('should add Samsung Galaxy S6 to the cart', () => {
    cy.visit('https://www.demoblaze.com/');

    // Открываем модалку логина
    cy.get('a[data-target="#logInModal"]').click();
    cy.get('#logInModal').should('be.visible');

    // Вводим логин и пароль
    cy.get('#loginusername').should('be.visible').clear().type('Aurica123');
    cy.get('#loginpassword').should('be.visible').clear().type('Aurica123!');
    cy.get('button[onclick="logIn()"]').click();

    // Проверяем, что вошли
    cy.contains('Welcome Aurica123').should('be.visible');

    // Добавляем товар
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();

    // Проверка alert
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Product added');
    });
  });
});
