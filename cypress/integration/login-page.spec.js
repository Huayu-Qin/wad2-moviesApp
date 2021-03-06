import {  } from "module";
describe("Login", () => {
    beforeEach(() => {
        cy.wait(10000)
        cy.visit(`/`);
        cy.get("nav").find("li").eq(7).find("a").click();
    });
    describe("Login Component", () => {

        it("should display Log in the container", () => {
            cy.get("h2").contains("Log In");
        });
        it("should display Email in the container", () => {
            cy.label("Email");
        });
        it("should display Password in the container", () => {
            cy.label("Password");
        });
        // it("should display a Log In button in the container", () => {
        //     cy.get("button").contains("Log");
        // });
        // it("should display 'Forgot Password?' in the container", () => {
        //     cy.get('a[href*="/movies/forget-password"]').contains("Forgot Password?");
        // });
        it("should display 'Sign up' out of the container", () => {
            cy.get('a[href*="/movies/signup"]').contains("Sign Up");
        });
    });
    describe("Error Enter", () => {
        it("should display 'There should be a @ in email' after after entering 1", () => {
            cy.get("input").eq(0).clear().type("1")
            cy.get("button").contains("Log In").click()
            cy.get('p').contains("There should be a @ in email")
        });

        // it("should display 'password should not be empty'", () => {
        //     cy.get("input").eq(0).clear().type("1@qq.com")
        //     cy.get("button").click()
        //     cy.get('p').contains("password should not be empty")
        // });
        it("should display 'Failed to log in'When you enter incorrect data", () => {
            cy.get("input").eq(0).clear().type("1@qq.com")
            cy.get("input").eq(1).clear().type("1234567")
            cy.get("button").contains("Log In").click()
            cy.get('.fade').contains("Failed to log in")
        });
        it("should display 'Email should not be empty'", () => {
            
            cy.get("input").eq(1).clear().type("1234567")
            cy.get("button").contains("Log In").click()
            cy.get('p').contains("Email should not be empty")
        });
        it("should display 'Password should not be empty'", () => {
            cy.get("input").eq(0).clear().type("12@")
            
            cy.get("button").contains("Log In").click()
            cy.get('p').contains("Password should not be empty")
        });
    })
    describe("Button", () => {
        it("should navigate to the home page after entering correct data", () => {
            cy.get("input").eq(0).clear().type("qqq3@qq.com")
            cy.get("input").eq(1).clear().type("qqqqqq3")
            cy.get("button").contains("Log In").click()
            cy.url().should("include", `/`);
            cy.get("#qhy")
        });
        it("should navigate to signup page ", () => {
            cy.get('a[href*="/movies/signup"]').contains("Sign Up").click()
            cy.url().should("include", `/movies/signup`);
            cy.get("h2").contains("Sign Up");
        });
    });
})
