let movies;

const filterByTitle = (movieList, string) =>
    movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
    movieList.filter((m) => m.genre_ids.includes(genreId));

describe("TopRated Page", () => {
    before(() => {
        // Get movies from TMDB and store in movies variable.
        cy.request(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&page=1`
        )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
                movies = response.results
            })
    })
    beforeEach(() => {
        cy.visit("/");
        cy.get('a[href*="/movies/toprated"]').should('be.hidden').invoke('show').click({ force: true })
    });
    describe("Base test", () => {
        it("displays page header", () => {
            cy.get("h2").contains("Top Rated Movies");
            cy.get(".badge").contains(20);
        });
    })
    describe("Filtering", () => {
        describe("By movie title", () => {
            it("should display movies with 'p ' in the title", () => {
                const searchString = 'p'
                const matchingMovies = filterByTitle(movies, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".card").should("have.length", matchingMovies.length);
                cy.get(".card").each(($card, index) => {
                    cy.wrap($card)
                        .find(".card-title")
                        .should("have.text", matchingMovies[index].title);
                });
            })
        })
        describe("By movie genre", () => {
            it("should display movies with the specified genre only", () => {
                const selectedGenreId = 35;
                const selectedGenreText = "Comedy";
                const matchingMovies = filterByGenre(movies, selectedGenreId);
                cy.get("select").select(selectedGenreText);
                cy.get(".card").should("have.length", matchingMovies.length);
                cy.get(".card").each(($card, index) => {
                    cy.wrap($card)
                        .find(".card-title")
                        .should("have.text", matchingMovies[index].title);
                });
            });
        });
        describe("By movie genre and title", () => {
            it("should display movies with the specified genre and 'i' in the title", () => {
                const selectedGenreId = 35;
                const selectedGenreText = "Comedy";
                const searchString = "i";
                const matchingMovies = filterByGenre(movies, selectedGenreId);
                const matchingMovies2 = filterByTitle(matchingMovies, searchString);
                cy.get("select").select(selectedGenreText);
                cy.get("input").clear().type(searchString);
                cy.get(".card").should("have.length", matchingMovies2.length);
                cy.get(".card").each(($card, index) => {
                    cy.wrap($card)
                        .find(".card-title")
                        .should("have.text", matchingMovies2[index].title);
                })
            });
        });
    })
})