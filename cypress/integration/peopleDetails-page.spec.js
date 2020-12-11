let peopleId = null
let people;
//let reviews;
describe("People Details Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&page=1`
        )
            .its("body")
            .then((response) => {
                return response.results[2].id;
            })
            .then((arbitraryPeopleIdignored) => {
                peopleId = arbitraryPeopleIdignored
                return cy
                    .request(
                        `https://api.themoviedb.org/3/person/${peopleId}?api_key=${Cypress.env(
                            "TMDB_KEY"
                        )}&language=en-US`
                    )
                    .its("body");
            })
            .then((peopleDetails) => {
                people = peopleDetails;
                return peopleDetails.id;
            })
    });
    beforeEach(() => {
        cy.visit(`/`);
        cy.get("nav").find("li").eq(3).find("a").click();
        cy.get(".card").eq(2).find("img").click();
    });

    it("should display peope name in the page header", () => {
        cy.get("h2").contains(people.name);
    });
    it("should display the people's details", () => {
        cy.get("h4").contains("Biography");
        // cy.get("h4").next().contains(people.biography);
        cy.get("ul")
            .eq(1)
            .within(() => {
                cy.get("li").eq(0).contains("Birthday");
                cy.get("li").eq(1).contains(people.birthday);

            });
        cy.get("ul")
            .eq(5)
            .within(() => {
                cy.get("li").eq(0).contains("Popularity");
                cy.get("li").eq(1).contains(people.popularity);
            });
    });
 
      
      it("should display the people poster with the appropriate src attribute", () => {
        cy.get(".people")
            .should("have.attr", "src")
            .should("include", people.profile_path);
    });

});