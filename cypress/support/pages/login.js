import { loginPageLocators } from '../locator/locators';
class Login {
    login(environment, email, password) {
        cy.visit(Cypress.env(environment))
        cy.getBySel(loginPageLocators.email_field, { timeout: 10000 }).should('be.visible').clear().type(email)
        cy.getBySel(loginPageLocators.password_field, { timeout: 10000 }).should('be.visible').clear().type(password)
        cy.getBySel(loginPageLocators.submit_button, { timeout: 10000 }).should('be.visible').click()
    }
}
export default new Login();