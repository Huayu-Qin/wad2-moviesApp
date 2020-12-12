describe("Login", () => {
    beforeEach(() => {
        cy.visit(`/`);
        cy.get("nav").find("li").eq(5).find("a").click();
        cy.get("input").eq(0).clear().type("qqq3@qq.com")
        cy.get("input").eq(1).clear().type("qqqqqq3")
        cy.get("button").click()
        cy.url().should("include", `/`);
        cy.get("#qhy")
        cy.get("nav").find("li").eq(5).find("a").click();
    });
    describe("profile page", () => {
        it("should navigate to profile page", () => {
            cy.get("#profile");
        });
        it("should display the current user's email", () => {
            cy.get(".card").contains("qqq3@qq.com");
        });
    });
});