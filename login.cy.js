describe('Login test on Demoblaze', () => {
  it('should login with valid credentials', () => {
    const username = 'Aurica123';         // ← здесь твой username
    const password = 'Aurica123!';       // ← здесь твой актуальный пароль

    cy.visit('https://www.demoblaze.com');

    // открываем окно логина
    cy.get('a[data-target="#logInModal"]').click();
    cy.get('#logInModal').should('be.visible');

    // вводим логин и пароль
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);

    // ловим alert с ошибкой, если появится
    cy.on('window:alert', (text) => {
      expect(text).not.to.include('Wrong password');
    });

    // кликаем Log in
    cy.get('button[onclick="logIn()"]').click();

    // проверяем, что вошли — есть текст Welcome Aurica123
    cy.contains(`Welcome ${username}`, { timeout: 10000 }).should('be.visible');
  });
});

