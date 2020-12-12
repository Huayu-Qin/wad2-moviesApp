describe("Login", () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.get("nav").find("li").eq(5).find("a").click();
        cy.get('a[href*="/movies/signup"]').contains("Sign Up").click()
        
    });
    describe("Setup Component", () => {

        it("should display Set Up the container", () => {
            cy.url().should("include", `/movies/signup`);
            cy.get("#signup")
        });
        it("should display Email in the container", () => {
            cy.get("label").contains("Email");
        });
        it("should display Password in the container", () => {
            cy.get("label").contains("Password");
        });
        it("should display Password Confirmation in the container", () => {
            cy.get("label").contains("Password Confirmation");
        });
        it("should display a Sign Up button in the container", () => {
            cy.get("#signupbutton");
        });

        it("should display 'Log In' out of the container", () => {
            cy.get('a[href*="/movies/login"]').contains("Log In");
        });
    });
})