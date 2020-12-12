describe("Signup", () => {
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
    describe("Error Enter", () => {
        it("should display 'There should be a @ in email' after after entering q", () => {
            cy.get("input").eq(0).clear().type("q")
            cy.get("button").click()
            cy.get('p').contains("There should be a @ in email")
        });

        // it("should display 'Password should not be empty'", () => {
        //     cy.get("input").eq(0).clear().type("q@qq.com")
        //     cy.get("button").click()
        //     cy.get('p').contains("Password should not be empty and comfirm again")
        // });
        // it("should display 'Password should be comfirm again'", () => {
        //     cy.get("input").eq(0).clear().type("q@qq.com")
        //     cy.get("input").eq(1).clear().type("q@qq.com")
        //     cy.get("button").click()
        //     cy.get('p').contains("Password should not be empty and comfirm again")
        // });
        it("should display 'Passwords do not match'When you enter existing account email", () => {
            cy.get("input").eq(0).clear().type("qqq4@qq.com")
            cy.get("input").eq(1).clear().type("1234567")
            cy.get("input").eq(2).clear().type("1234568")
            cy.get("button").click()
            cy.get('.fade').contains("Passwords do not match")
        });
        it("should display 'Failed to create an account'When you enter existing account email", () => {
            cy.get("input").eq(0).clear().type("qqq3@qq.com")
            cy.get("input").eq(1).clear().type("1234567")
            cy.get("input").eq(2).clear().type("1234567")
            cy.get("button").click()
            cy.get('.fade').contains("Failed to create an account")
        });
    })
    describe("Button", () => {
        it("should navigate to the profile page after entering correct data", () => {
            cy.get("input").eq(0).clear().type("qqq4@qq.com")
            cy.get("input").eq(1).clear().type("qqqqqq4")
            cy.get("input").eq(2).clear().type("qqqqqq4")
            cy.get("button").click()
            cy.url().should("include", `/movies/profile`);
            cy.get("#profile")
        });
        it("should navigate to login page ", () => {
            cy.get('a[href*="/movies/login"]').contains("Log In").click()
            cy.url().should("include", `/movies/login`);
            cy.get("h2").contains("Log In");
        });
    });
})