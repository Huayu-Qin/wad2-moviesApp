let peoples;
const peopleId = 1245;
//let reviews;

describe("PeopleNavigation", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&page=1`
        )
            .its("body")
            .then((response) => {
                peoples = response.results;
            });
        cy.request(
            `https://api.themoviedb.org/3/person/${peopleId}?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US`
        )
            .its("body")
            .then((response) => {
                console.log(response);
                //reviews = response.results;
            });
    });

    describe("From the people page", () => {
        beforeEach(() => {
            cy.wait(10000)
            cy.visit("/");
            cy.get("nav").find("li").eq(3).find("a").click();
        });
        it("should navigate to the movie details page and change browser URL", () => {
            cy.get(".card").eq(1).find("img").click();
            cy.url().should("include", `/people/${peoples[1].id}`);
            cy.get("h2").contains(peoples[1].name);
        });
        // it("should allow navigation from site header", () => {
        //     cy.get("nav").find("li").eq(3).find("a").click();
        //     cy.url().should("include", `/people`);
        //     cy.get("h2").contains("Popular People");
        //     cy.get("nav").find("li").eq(4).find("a").click();
        //     cy.url().should("include", `/people/marks`);
        //     cy.get("h2").contains("Marked People");
        //     cy.get("nav").find("li").eq(0).find("a").click();
        //     cy.get("nav.navbar-brand").find("a").click();
        //     cy.url().should("not.include", `/people`);
        //     cy.get("h2").contains("Discover Movies");
        // });
    });
    describe("From the Marked People page", () => {
        beforeEach(() => {
            cy.wait(10000)
            cy.visit("/");
            cy.get("nav").find("li").eq(3).find("a").click();

        });
        it("should navigate to the people detail page and change the browser URL", () => {
            
            cy.get(".card").eq(0).find("img").click();
            cy.url().should("include", `/people/${peoples[0].id}`);
            cy.get("h2").contains(peoples[0].name);
        });
    });
    describe("The Go Back button", () => {
        beforeEach(() => {
            cy.wait(10000)
            cy.visit("/");
            cy.get("nav").find("li").eq(3).find("a").click();
        });
        it("should navigate from people page to people details and back", () => {
            cy.get(".card").eq(1).find("img").click();
            cy.get("svg[data-icon=arrow-circle-left]").click();
            cy.url().should("include", `/people`);
            cy.get("h2").contains("Popular People");
        });
        it("should navigate from Marked People page to people details and back", () => {
            cy.visit('/')
            cy.get('a[href*="/people/marks"]').should('be.hidden').invoke('show').click({ force: true })
            cy.get("input").eq(0).clear().type("qqq3@qq.com")
            cy.get("input").eq(1).clear().type("qqqqqq3")
            cy.get("button").contains("Log In").click()
            cy.get("nav").find("li").eq(3).find("a").click();
            cy.get(".card").eq(0).find("button").click();
            cy.get('a[href*="/people/marks"]').should('be.hidden').invoke('show').click({ force: true })
            cy.get(".card").eq(0).find("img").click();
            cy.get("svg[data-icon=arrow-circle-left]").click();
            cy.url().should("include", `/people/marks`);
            cy.get("h2").contains("Marked People");
        });
    });
});