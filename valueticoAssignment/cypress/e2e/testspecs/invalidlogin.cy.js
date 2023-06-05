import LoginPage from "../../pageobjects/loginpo.cy";
const loginpage = new LoginPage();

describe("Verify the Login Functionality", () => {
    beforeEach(() => {
        cy.visit("https://jobee.pk/account/login");
    });

    it("User should not be able to login with incorrect credentials", () => {
        loginpage.loginWithIncorrectCredentials();
        loginpage.errorMessage1.should("contain.text", "Invalid login attempt.");
    });

    it("User should not be able to login with empty credentials", () => {
        loginpage.loginWithEmptyCredentials();
        loginpage.errorMessage2.should("contain.text", "This field is required.");
    });
});