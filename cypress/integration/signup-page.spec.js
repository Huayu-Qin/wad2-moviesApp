describe("Signup", () => {
    beforeEach(() => {
        cy.wait(10000)
        cy.visit(`/`);
        cy.get("nav").find("li").eq(7).find("a").click();
        cy.get('a[href*="/movies/signup"]').contains("Sign Up").click()
        
    });
    describe("Setup Component", () => {

        it("should display Set Up the container", () => {
            cy.url().should("include", `/movies/signup`);
            cy.get("#signup")
        });
        it("should display Email in the container", () => {
            cy.label("Email");
        });
        it("should display Password in the container", () => {
            cy.label("Password");
        });
        it("should display Password Confirmation in the container", () => {
            cy.label("Password Confirmation");
        });
        it("should display a Sign Up button in the container", () => {
            cy.get("#signupbutton");
        });

        // it("should display 'Log In' out of the container", () => {
        //     cy.get('a[href*="/movies/login"]').contains("Log In");
        // });
    });
    describe("Error Enter", () => {
        it("should display 'There should be a @ in email' after after entering q", () => {
            cy.wait(10000)
            cy.get("input").eq(0).clear().type("q")
            cy.get("button").contains("Sign Up").click()
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
            cy.wait(10000)
            cy.get("input").eq(0).clear().type("qqq4@qq.com")
            cy.get("input").eq(1).clear().type("1234567")
            cy.get("input").eq(2).clear().type("1234568")
            cy.get("button").contains("Sign Up").click()
            cy.get('.fade').contains("Passwords do not match")
        });
        it("should display 'Failed to create an account'When you enter existing account email", () => {
            cy.wait(10000)
            cy.get("input").eq(0).clear().type("qqq3@qq.com")
            cy.get("input").eq(1).clear().type("1234567")
            cy.get("input").eq(2).clear().type("1234567")
            cy.get("button").contains("Sign Up").click()
            cy.get('.fade').contains("Failed to create an account")
        });
        it("should display 'Email should not be empty'", () => {
            cy.wait(10000)
            cy.get("input").eq(1).clear().type("1234567")
            cy.get("input").eq(2).clear().type("1234567")
            cy.get("button").contains("Sign Up").click()
            cy.get('p').contains("Email should not be empty")
        });
        it("should display 'Password should be confirmed again'", () => {
            cy.wait(10000)
            cy.get("input").eq(0).clear().type("12@")
    
            cy.get("input").eq(1).clear().type("1234567")
            cy.get("button").contains("Sign Up").click()
            cy.get('p').contains("Password should be confirmed again")
        });
    })
    describe("Button", () => {
        it("should navigate to the profile page after entering correct data", () => {
            cy.wait(10000)
            cy.get("input").eq(0).clear().type("qqq4@qq.com")
            cy.get("input").eq(1).clear().type("qqqqqq4")
            cy.get("input").eq(2).clear().type("qqqqqq4")
            cy.get("button").contains("Sign Up").click()
            cy.url().should("include", `/movies/profile`);
            cy.get("#profile")
        });
        it("should navigate to login page ", () => {
            cy.wait(10000)
            cy.get('a[href*="/movies/login"]').contains("Log In").click()
            cy.url().should("include", `/movies/login`);
            cy.get("h2").contains("Log In");
        });
    });
})