import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import "bootstrap/dist/css/bootstrap.min.css"
import AuthProvider from "./contexts/authContext" 
import PrivateRoute from "./components/privateRoute"
import PeoplesContextProvider from './contexts/peoplesContext'

const HomePage = lazy(() => import( "./pages/homePage"));
const MoviePage = lazy(() => import( './pages/movieDetailsPage'))
const FavoriteMoviesPage = lazy(() => import( './pages/favoritesMoviesPage'))
const WatchListMoviesPage = lazy(() => import( './pages/watchListsMoviesPage'))
const MovieReviewPage = lazy(() => import( "./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy(() => import( './pages/upcomingMoviesPage'))
const AddMovieReviewPage = lazy(() => import( './pages/addMovieReviewPage'))
const signUpPage = lazy(() => import( "./pages/signUpPage"));
const loginPage = lazy(() => import( "./pages/loginPage"));
const profilePage = lazy(() => import( "./pages/profilePage"));
const forgetPasswordPage = lazy(() => import( "./pages/forgetPasswordPage"))
const updateProfilePage = lazy(() => import( "./pages/updateProfilePage"))
const PeoplePage = lazy(() => import( './pages/peoplePage'))
const PeopleDetailsPage = lazy(() => import( './pages/peopleDetailsPage'))
const MarkPeoplePage = lazy(() => import( './pages/MarkPeoplePage'))
const AddPeopleComplimentPage = lazy(() => import( './pages/addPeopleComplimentPage'))
const TopRatedMoviesPage = lazy(() => import( './pages/topRatedMoviesPage'))
const SimilarMoviesPage = lazy(() => import( './pages/similarMoviesPage'))
const MovieCreditsPage = lazy(() => import( './pages/movieCreditsPage'))


const App = () => {
    return (
        <BrowserRouter>
            <div className="jumbotron">
                <SiteHeader />
                <div className="container-fluid mt-3">
                    <MoviesContextProvider>
                        <PeoplesContextProvider>
                            <GenresContextProvider>    {/* NEW */}
                                <AuthProvider>
                                    <Switch>
                                        <Route exact path="/compliments/form" component={AddPeopleComplimentPage} />
                                        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                                        <Route path="/reviews/:id" component={MovieReviewPage} />
                                        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                                        <PrivateRoute exact path="/movies/watchlists" component={WatchListMoviesPage} />
                                        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                                        <Route exact path ="/movies/toprated" component={TopRatedMoviesPage} />
                                        <Route exact path="/:id/similar" component={SimilarMoviesPage}/>
                                        <Route exact path="/movies/:id/movie-credits" component={MovieCreditsPage} />
                                        <Route exact path="/movies/signup" component={signUpPage} />
                                        <Route exact path="/movies/login" component={loginPage} />
                                        <PrivateRoute exact path="/movies/profile" component={profilePage} />
                                        <Route exact path="/movies/forget-password" component={forgetPasswordPage} />
                                        <PrivateRoute exact path="/movies/update-profile" component={updateProfilePage} />
                                        <Route exact path="/people" component={PeoplePage} />
                                        <PrivateRoute exact path="/people/marks" component={MarkPeoplePage} />
                                        <Route exact path="/people/:id" component={PeopleDetailsPage} />
                                        <Route path="/movies/:id" component={MoviePage} />
                                        <Route path="/" component={HomePage} />
                                        <Redirect from="*" to="/" />
                                    </Switch>
                                </AuthProvider>
                            </GenresContextProvider>
                        </PeoplesContextProvider>
                    </MoviesContextProvider>
                </div>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(
<Suspense fallback = {<h3>Loading...</h3>}>

<App />, document.getElementById("root"));
</Suspense>,
document.getElementById("root"))