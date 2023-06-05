import LoginPage from "../../pageobjects/loginpo.cy";
const loginpage = new LoginPage();

const availablefixtures = [{
        name: "testdata1",
        context: "1",
    },
    {
        name: "testdata2",
        context: "2",
    },
];
describe("Verify the Login Functionality with correct credentails from test file", function() {
    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            before(function() {
                cy.visit("https://jobee.pk/account/login");
                cy.fixture(afixture.name).then(function(data) {
                    this.data = data;
                });
            });

            it("User should be able to login with correct credentials", function() {
                loginpage.emailField.type(this.data.email);
                loginpage.passwordField.type(this.data.password);
                loginpage.loginButton.click();
                loginpage.profileLink.should("be.visible");
            });
            after(function() {
                cy.log("Data Driven Testing has been completed");
            });
        });
    });
});