let movieId = null
let movie;
let reviews;
describe("Similar Movies Page", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                return response.results[2].id;
            })
            .then((arbitraryMovieIdignored) => {
                movieId = arbitraryMovieIdignored
                return cy
                    .request(
                        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${Cypress.env(
                            "TMDB_KEY"
                        )}&language=en-US&page=1`
                    )
                    .its("body");
            })
            .then((movieDetails) => {
                movie = movieDetails;
                return movieDetails.id;
            })
    });
    beforeEach(() => {
        cy.visit(`/`);
        cy.get(".card").eq(2).find("img").click();
        cy.get("a").contains("Similar Movies").click();

    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.wait(10000)
            cy.get("h2").contains("Similar Movies");
            cy.get(".badge").contains(20);
        });
    })
    describe("Details Page", () => {
        it("should display the details page", () => {
            cy.get(".card").eq(2).find("img").click();
            cy.get("h4").contains("Overview");
        });
        it("should back to the similar page", () => {
            cy.get(".card").eq(2).find("img").click();
            cy.get("h4").contains("Overview");
            cy.get("svg[data-icon=arrow-circle-left]").click();
            cy.get("h2").contains("Similar Movies");
        });
    })

//     describe("Filtering", () => {
//         beforeEach(() => {
//             cy.visit(`/`);
//             cy.get(".card").eq(2).find("img").click();
//             cy.get("a").contains("Similar Movies").click();

//         });
//         describe("By movie title", () => {
//             it("should display movies with 'p ' in the title", () => {
//                 const searchString = 'p'
//                 const matchingMovies = filterByTitle(movies, searchString);
//                 cy.get("input").clear().type(searchString);
//                 cy.get(".card").should("have.length", matchingMovies.length);
//                 cy.get(".card").each(($card, index) => {
//                     cy.wrap($card)
//                         .find(".card-title")
//                         .should("have.text", matchingMovies[index].title);
//                 });
//             })
//             it("should display movies with 'o' in the title", () => {
//                 const searchString = "o";
//                 const matchingMovies = filterByTitle(movies, searchString);
//                 cy.get("input").clear().type(searchString);
//                 cy.get(".card").should("have.length", matchingMovies.length);
//                 cy.get(".card").each(($card, index) => {
//                     cy.wrap($card)
//                         .find(".card-title")
//                         .should("have.text", matchingMovies[index].title);
//                 })
//             })
//             it("should display movies with 'xyz ' in the title", () => {
//                 const searchString = 'xyz'
//                 const matchingMovies = filterByTitle(movies, searchString);
//                 cy.get("input").clear().type(searchString);
//                 cy.get(".card").should("have.length", 0);

//             })
//         })
//         describe("By movie genre", () => {
//             it("should display movies with the specified genre only", () => {
//                 const selectedGenreId = 35;
//                 const selectedGenreText = "Comedy";
//                 const matchingMovies = filterByGenre(movies, selectedGenreId);
//                 cy.get("select").select(selectedGenreText);
//                 cy.get(".card").should("have.length", matchingMovies.length);
//                 cy.get(".card").each(($card, index) => {
//                     cy.wrap($card)
//                         .find(".card-title")
//                         .should("have.text", matchingMovies[index].title);
//                 });
//             });
//         });
//         describe("By movie genre and title", () => {
//             it("should display movies with the specified genre and 'i' in the title", () => {
//                 const selectedGenreId = 35;
//                 const selectedGenreText = "Comedy";
//                 const searchString = "i";
//                 const matchingMovies = filterByGenre(movies, selectedGenreId);
//                 const matchingMovies2 = filterByTitle(matchingMovies, searchString);
//                 cy.get("select").select(selectedGenreText);
//                 cy.get("input").clear().type(searchString);
//                 cy.get(".card").should("have.length", matchingMovies2.length);
//                 cy.get(".card").each(($card, index) => {
//                     cy.wrap($card)
//                         .find(".card-title")
//                         .should("have.text", matchingMovies2[index].title);
//                 })
//             });
//         });
//     })
});