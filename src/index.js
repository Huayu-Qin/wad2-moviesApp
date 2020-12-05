import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import "bootstrap/dist/css/bootstrap.min.css"
import  AuthProvider from "./contexts/authContext"
import signUpPage from "./pages/signUpPage";
import loginPage from "./pages/loginPage";
import profilePage from "./pages/profilePage";
import PrivateRoute from  "./components/privateRoute"

const App = () => {
    return (
        <BrowserRouter>
            <div className="jumbotron">
                <SiteHeader />
                <div className="container-fluid">
                    <MoviesContextProvider>
                        <GenresContextProvider>    {/* NEW */}
                            <AuthProvider>
                            <Switch>
                                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                                <Route path="/reviews/:id" component={MovieReviewPage} />
                                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                                <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                                <Route exact path="/movies/signup" component={signUpPage}/>
                                <Route exact path="/movies/login" component={loginPage}/>
                                <Route exact path="/movies/profile" component={profilePage}/>
                                <Route path="/movies/:id" component={MoviePage} />
                                <PrivateRoute path="/" component={HomePage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                            </AuthProvider>
                        </GenresContextProvider>    {/* NEW */}
                    </MoviesContextProvider>
                </div>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));