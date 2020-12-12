describe("Login", () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.get("nav").find("li").eq(5).find("a").click();
    });
    describe("Login Component", () =>{

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
    describe("Error Enter", () =>{
        it("should display 'Failed to log in' only enter Email message", () => {
            cy.get("input").eq(0).clear().type("1")
            cy.get("button").click()
            cy.get('p').contains("There should be a @ in email")
        });
    })
    // describe("Error Enter", () =>{
    //     it("should display 'Please enter this words' only enter Password message", () => {
    //         cy.get('input')
    //         cy.get('div').should('have.class', "fade alert alert-danger show")
    //     });
    // })
});
