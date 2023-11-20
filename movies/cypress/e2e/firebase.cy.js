describe('LoginPage', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
  
    it('allows a user to sign in', () => {
      cy.get('input[name="email"]').type('20095253@mail.wit.ie');
      cy.get('input[name="password"]').type('ZQEHQU9j2');
      cy.get('form').contains('Login').click();
      cy.url().should('eq', 'http://localhost:3000/1')
    });
  
    it('allows a user to sign up', () => {
      // avoid conflict with existing users
      const uniqueEmail = `test_user_${new Date().getTime()}@example.com`;
      cy.get('input[name="email"]').type(uniqueEmail);
      cy.get('input[name="password"]').type('password');
      cy.get('button').contains('Sign Up').click();
      cy.url().should('eq', 'http://localhost:3000/1')
    });
  });