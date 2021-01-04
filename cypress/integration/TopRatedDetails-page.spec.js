let movieId = null
let movie;
let reviews;
describe("TopRated Details Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&page=1`
        )
            .its("body")
            .then((response) => {
                return response.results[2].id;
            })
            .then((arbitraryMovieIdignored) => {
                movieId = arbitraryMovieIdignored
                return cy
                    .request(
                        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
                            "TMDB_KEY"
                        )}`
                    )
                    .its("body");
            })
            .then((movieDetails) => {
                movie = movieDetails;
                return movieDetails.id;
            })
    });
    beforeEach(() => {
        cy.wait(10000)
        cy.visit(`/`);
        cy.get('a[href*="/movies/toprated"]').should('be.hidden').invoke('show').click({ force: true })
        cy.get(".card").eq(2).find("img").click({ force: true });
    });
    describe(("Base component"), () => {
        beforeEach(() => {
            cy.wait(10000)
            cy.visit(`/`);
            cy.get('a[href*="/movies/toprated"]').should('be.hidden').invoke('show').click({ force: true })
            cy.get(".card").eq(2).find("img").click({ force: true });
        })
        it("should display movie title in the page header", () => {
            cy.wait(10000)
            cy.get("h2").contains(movie.title);
        });
        it("should display the movie's details", () => {
            cy.get("h4").contains("Overview");
            cy.get("h4").next().contains(movie.overview);
            cy.get("ul")
                .eq(1)
                .within(() => {
                    cy.get("li").eq(0).contains("Runtime");
                    cy.get("li").eq(1).contains(movie.runtime);
                    cy.get("li").eq(2).contains("Release Date");
                    cy.get("li").eq(3).contains(movie.release_date);
                });
        })
    })
    describe(("Button fuction"), () => {
        beforeEach(() => {
            cy.wait(10000)
            cy.visit(`/`);
            cy.get('a[href*="/movies/toprated"]').should('be.hidden').invoke('show').click({ force: true })
            cy.get(".card").eq(2).find("img").click();
        })
        it("should nativate to the Similar Movies", () => {
            cy.wait(10000)
            cy.get("a").contains("Similar Movies").click();
            cy.url().should("include", `/${movie.id}/similar`);
            cy.get("h2").contains("Similar Movies");
        });
        it("should nativate to the list of actors Page", () => {
            cy.wait(10000)
            cy.get("a").contains("Actors In the movie").click();
            cy.url().should("include", `/${movie.id}/movie-credits`);
            cy.get(".table").contains("Photo");
        })
        it("should nativate to the list of actors page and back to the details Page", () => {
            cy.wait(10000)
            cy.get("a").contains("Actors In the movie").click();
            cy.url().should("include", `/${movie.id}/movie-credits`);
            cy.get(".table").contains("Photo");
            cy.get("svg[data-icon=arrow-circle-left]").click();
            cy.get("h4").contains("Overview");
        })
    })
})
