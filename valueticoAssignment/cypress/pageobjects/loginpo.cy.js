class LoginPage {
    get emailField() {
        return cy.get("#Email").as("Email field");
    }

    get passwordField() {
        return cy.get("#Password").as("Password Field");
    }

    get loginButton() {
        return cy.get("#login").as("Login Button");
    }

    get errorMessage1() {
        return cy
            .get("div[class='validation-summary-errors text-danger'] ")
            .as("Error Message for Invalid Login");
    }

    get errorMessage2() {
        return cy
            .get(":nth-child(1) > .text-danger > span")
            .as("Error Message for Empty Credentials ");
    }
    get profileLink() {
        return cy.get("#aProfile").as("Profile Link");
    }

    get loginLink() {
        return cy
            .get(".page-scroll[href='/account/login']")
            .as("Login Link");
    }



    loginWithCorrectCredentials() {
        this.emailField.type("K2143795@kingston.ac.uk");
        this.passwordField.type("Ea864B056$");
        this.loginButton.click();
    }

    loginWithIncorrectCredentials() {
        this.emailField.type("K2143795@kingston.ac.uk");
        this.passwordField.type("12345678");
        this.loginButton.click();
    }
    loginWithEmptyCredentials() {
        this.loginButton.click();
    }
}
export default LoginPage;