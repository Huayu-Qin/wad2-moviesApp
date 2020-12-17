# Assignment 1 - ReactJS app.

Name: Huayu Qin 

## Features.

 + Feature 1 - Use firebase to create movie app registration, login, logout, update account information and forget password function. 
 + Feature 2 - The registration function requires the user to fill in the correct email format and enter the correct password confirmation. Successful registration will jump to the personal page.
 + Feature 3 - The login function allows users to log in with a registered account, and will require users to log in when they need to view personal information related interfaces
 + Feature 4 - The logout function and the account information update function are used as auxiliary functions to make WEBAPP complete
 + Feature 5 - Added the Top rated movie interface to show users a list of movies with high ratings currently.
 + Feature 6 - In the movie details page, added a similar movie button to filter and display similar movies according to the current movie.
 + Feature 7 - In the movie details page, added a list of movie actors. Click the button to display the list of actors
 + Feature 8 - Added an interface for current popular actors, which will show current famous actors according to their popularity
 + Feature 9 - Added a marker function to the cast list, so that users can mark the actors they are interested in and view them on the "marked people" page later
 + Feature 10 - In the "Marked People" interface, you can see the marked users. At the same time, you can choose to click to view his detailed information or click the "Give a Compliment" button, and you will post a compliment to the actor to the message board with other people share it
 + Feature 11 - Added a movie rating component by using the REACT UI component, and the favorite movies can be dynamically scored on the Favourite page
 + Feature 12 - Use third-party style components to refactor the navigation bar to realize the drawer style
 + Feature 13 - Set a private route for the page to verify user information to achieve account login

## Setup requirements (If required).

1. npm install //Install node operating environment

2. npm i firebase //Install firebase runtime environment

3. yarn add react-hook-form //Install the form library

3. npm install antd --save //Install REACT UI-Ant Design 

4. npm install @material-ui/core //Install Material-UI

5. npm install bootstrap@next //Install BookStrap


## API Data Model.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/person/popular - get information of popular actors
+ https://api.themoviedb.org/3/person/${id} - get detailed information on a specific actor
+ https://api.themoviedb.org/3/movie/${id}/similar - get similar movie information on a specific movie 
+ https://api.themoviedb.org/3/movie/${id}/credits - get information about the actors in a specific movie
+ https://api.themoviedb.org/3/movie/top_rated - get information of top rated movies

## App Design.

- version1：Configure firebase in movieapp. Add registration, login, logout, user account display, account information update functions.
    - Create forms and set formatting restrictions for input data
    - In the registration interface, the user fills in the account password in the standard format according to the requirements, After successful registration, the user will jump to the personal home page. At this time, the user's account information is posted to firebase for recording, providing identity information verification for the next login.At the bottom of the page, there are buttons to connect to the login interface
    - In the login page, the user input the data stored in firebase, submit the request to the authentication, and enter the home page after the verification is successful
    - The login button realizes the switch of user account
- version2：Add Actor related pages and Realize related functions
    - Show people list and overview on the peope page and refactor the page style
    - The people details page displays the actors’ personal information
    - Increase the mark function, store the actor mark in the collections
    - Add forms and post compliments to the message board
- version3: Add TopRated movie page and add Movie related actor function
    - Realize the movie function, add the cast button on the movie detail page, and find the corresponding cast member by ID
    - Increase the function of Similar movies, and refactor the detail page into the list of all movies  to realize dynamic linking
    - Complete the WatchList interface 
- version4: Refactor the navigation bar, insert third-party components and use React UI to beautify the page
    - Refactored the navigation bar with third-party components, and displayed the buttons in the form of a drawer 
    - Insert the rating module designed by ant-design to achieve dynamic scoring of favorite movies
    - Use material UI and CSS to beautify the interface
- version5: Fix bugs and refactor


### Component catalogue (If required).

![][stories]

### UI Design.

![][movieDetails]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

![][login]
![][signup]
>Support users to register and log in  movieapps

![][toprated]
>Show top rated movie information and overview

![][watchlist]
>Show Watchlist page

![][movieNewDetails]
>Added similar movies and related actors buttons to the movie interface 

![][similar]
>Show similar movies of current movie and back button

![][movieCredits]
>Show the relevant cast and crew information of the current movie

![][peopleDetails]
>show the people details page

![][navigation-movie]
>The navigation bar categorizes movies and supports jumping to each other

![][rateMovies]
>Support users to rate movies  and post their compliments on message board
## Routing.


+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/watchLists (protected) - display the watchlists of movie list
+ /movies/toprated (public) - display the top rated movie 
+ /movies/:id/movie-credits (public) - display the related actors of specific movies
+ /:id/similar (public) - dispaly the similar movies 
+ /movies/signup (public) - dispaly the signup page 
+ /movies/login (public) - display the login page
+ /movies/profile (protected) - display the profile page and logout component
+ /movies/update-profile (protected) - display the update profile
+ /people (public)- display the people page
+ /people/marks (protected) - display the marked people page in collections
+ /people/:id (public) - display the people detailspage


### Data hyperlinking.


![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][similarButton]
>Clicking the 'similar movies' for a similar movies list about the current movies 

![][actorButton]
>Clicking the 'Actors in the movie' for a list of relavent actors 

![][navigation-collectionsButton]
>Hover on the navigation bar and click the Collections button to display classification options

![][rateMoviesButton]
>Click the smiley face under the comment button to rate the movie (level 1-5)

![][logoutButton]
>Click the Log Out button to logout and turn to login page

![][privateRouterButton]
>Click the MarkedPeople button and turn to log in page If not no account

## Independent learning (If relevant).

1.Firebase
 - Support login and registration functions
 - filename:

   - /src/firebase.js

   - /src/context/authContext.js
 - part code:
```js
function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])
    。。。
```
- reference: https://firebase.google.com/docs/auth/web/password-auth?authuser=1#sign_in_a_user_with_an_email_address_and_password

2.Ant-Design

 - Add the rate movies function
 - filename:

   - /src/components/movieRateCrad

   - /src/components/templateRateMovieListPage

   - /src/components/movieRateList

   - /src/page/favouritesMoviesPage.js
 - part code:
```js
import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

onst customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
const MovieRateCard = ({ movie, action }) => {

    return (
         ...
    src={
        movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : "./film-poster-placeholder.png"
    }
                        ...
```
- reference: https://ant.design/components/rate-cn/

3.third-part style

 - Refactor the navigation bar
 - filename:
   - src/components/siteheader

 - part code:
```js
  <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <div class="dropdown" >
            <button class="dropbtn" id="navigation-Movie">Movie</button>
            <div class="dropdown-content">

              <li className="nav-item" id = "home">
                <Link className="nav-link text-white" to="/">
                  Home
           ....
            </Link>
              </li>
            </div>
          </div>
```
- reference: https://www.w3schools.com/w3css/w3css_dropdowns.asp

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Huayu Qin

## App Features.

+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails.spec.js 

![][movieDetails-ag]

+ Movie Review page: Displays the full text of a movie review.

Tests: cypress/integration/movieReviewPage.spec.js 

![][movieReviews-ag]

+ signup page: Allow users to create a format-compliant account and turn to the profile page

Tests: cypress/integration/sign-up.spec.js

![][signup]

+ login page: Allow users to log in to the protected router of MovieApp through firebase account information

Tests: cypress/integration/login-page.spec.js

![][login]

+ log out page: Allow users to log out of the current account and switch account information

Tests: cypress/integration/logout-page.spec.js

![][logout]

+ navigation page: Users need to log in to access the private router 

Tests: cypress/integration/navigation.spec.js

![][privateRouter]

+ people page: Displays the full text of people list

Tests: cypress/integration/people-page.spec.js

![][people]

+ peopleDetails-page: Displays the full text of a people 

Tests: cypress/integration/peopleDetails-page.spec.js

![][peopleDetails]

+ peopleNavigation page: Allow users to mark actors, log in to view the marked information and rate

Tests: cypress/integration/peopleNavigation.spec.js

![][markPeople]

+ TopRated page : Displays the full text of the TopRated movies

Tests: cypress/integration/TopRated-page.spec.js

![][toprated]

+ TopRatedDetails page : Display similar movies and movie-related cast and crew


Tests: cypress/integration/TopRatedDetails-page.spec.js

![][topRatedDetails]

## Testing.

Cypress Dashboard URL:  https://dashboard.cypress.io/organizations/842a45f5-c318-4369-ae53-6c37a49e3f6a/projects

Sorry for that I reached the plan limit, I build a new project(movieReactApp-fix) for my last test and the previous project test was in the old project(movieReactApp)

### Advanced Testing (If required).

+ cypress/integration/movieReviewPage.spec.js - test the movieReview page when the Review id is invalid. 
+ cypress/integration/movieDetails.spec.js - test when a movie has no reviews.
+ cypress/integration/login-page.spec.js - test when email input is empty
+ cypress/integration/login-page.spec.js - test when Password input is empty
+ cypress/integration/login-page.spec.js - test when account is wrong
+ cypress/integration/signup-page.spec.js - test when password input doesn't confirm
+ cypress/integration/login-page.spec.js - test when email is lack of '@' 
+ cypress/integration/login-page.spec.js - test when email is lack of element after '@' 

## Independent learning (If relevant).

1.Cypress custom command

 - Reduce repetitive structure code 
 - filename:

   - cypress/integration/login-page.spec.js 

   - cypress/integration/signup-page.spec.js
 - part code:
```js
Cypress.Commands.add('label', (a) => {
    cy.get('label').contains(a)
  })
it("should display Email in the container", () => {
  cy.label("Email");
});
it("should display Password in the container", () => {
  cy.label("Password");
});
```
- reference: https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax

2.Hover problems in cypress test

 - Solve the test problems caused by hidden attributes and hover events in the navigation bar
 - filename:
   - cypress/integration/navigation.spec.js
 - part code:

```js
describe("The Go Back button", () => {
        beforeEach(() => {
            cy.visit("/");
            cy.get('a[href*="/movies/favorites"]').should('be.hidden').invoke('show').click({ force: true })
            cy.get("input").eq(0).clear().type("qqq3@qq.com")
            cy.get("input").eq(1).clear().type("qqqqqq3")
            cy.get("button").contains("Log In").click()
            ...
```

 - reference: https://docs.cypress.io/api/commands/hover.html#Workarounds

---------------------------------

[movieDetail]: ./public/movieDetail.png
[movieDetails]: ./public/movieDetails.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardlink.png
[stories]: ./public/storybook.png
[login]: ./public/login.png
[signup]: ./public/signup.png
[toprated]: ./public/toprated.png
[watchlist]: ./public/watchlist.png
[movieNewDetails]: ./public/movieNewDetails.png
[similar]: ./public/similar.png
[movieCredits]: ./public/movieCredits.png
[peopleDetails]: ./public/peopleDetails.png
[navigation-movie]: ./public/navigation-movie.png
[rateMovies]: ./public/rateMovies.png
[similarButton]: ./public/similarButton.png
[actorButton]: ./public/actorButton.png
[navigation-collectionsButton]: ./public/navigation-collectionsButton.png
[rateMoviesButton]: ./public/rateMoviesButton.png
[logout]: ./public/logout.png
[logoutButton]: ./public/logoutButton.png
[privateRouterButton]: ./public/privateRouterButton.png
[movieDetails-ag]: ./public/movieDetails-ag.png
[privateRouter]: ./public/privateRouter.png
[people]: ./public/peoplePage.png
[peopleDetails-ag]: ./public/peopleDetails-ag.png
[markPeople]: ./public/markPeoplePage.png
[topRated]: ./public/topRated-ag.png
[topRatedDetails]: ./public/topRatedDetails.png
[movieReviews-ag]: ./public/movieReviews-ag.png
