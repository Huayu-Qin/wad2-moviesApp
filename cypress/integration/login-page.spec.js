describe("Login", () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.get("nav").find("li").eq(5).find("a").click();
    });
    describe("Login Component", () => {

        it("should display Log in the container", () => {
            cy.get("h2").contains("Log In");
        });
        it("should display Email in the container", () => {
            cy.get("label").contains("Email");
        });
        it("should display Password in the container", () => {
            cy.get("label").contains("Password");
        });
        it("should display a Log In button in the container", () => {
            cy.get("button").contains("Log In");
        });
        it("should display 'Forgot Password?' in the container", () => {
            cy.get('a[href*="/movies/forget-password"]').contains("Forgot Password?");
        });
        it("should display 'Sign up' out of the container", () => {
            cy.get('a[href*="/movies/signup"]').contains("Sign Up");
        });
    });
    describe("Error Enter", () => {
        it("should display 'There should be a @ in email' after after entering 1", () => {
            cy.get("input").eq(0).clear().type("1")
            cy.get("button").click()
            cy.get('p').contains("There should be a @ in email")
        });

        it("should display 'password should not be empty'", () => {
            cy.get("input").eq(0).clear().type("1@qq.com")
            cy.get("button").click()
            cy.get('p').contains("password should not be empty")
        });
    })
});
