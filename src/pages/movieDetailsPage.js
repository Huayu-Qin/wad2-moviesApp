import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";

const MoviePage = props => {
    const { id } = props.match.params;
    const [movie] = useMovie(id)  // NEW
    return (
        <>
            {movie ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieDetails movie={movie} />
                    </PageTemplate>
                    <div className="row">
                        <div className="col-12 ">
                            {!props.history.location.pathname.endsWith("/reviews") ? (
                                <Link
                                    className="btn btn-primary btn-block active"
                                    to={`/movies/${id}/reviews`}
                                >
                                    Show Reviews (Extracts)
                                </Link>
                            ) : (
                                    <Link
                                        className="btn btn-primary btn-block active"
                                        to={`/movies/${id}`}
                                    >
                                        Hide Reviews
                                    </Link>
                                )}
                        </div>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Link
                            className="btn btn-primary btn-block active"
                            to={{ pathname: `/movies/${movie.id}/movie-credits` }}
                        >
                            Actors In the movie
          </Link>
                    </div>

                    <Route
                        path={`/movies/:id/reviews`}
                        render={props => <MovieReviews movie={movie} {...props} />}
                    />
                </>
            ) : (
                    <p>Waiting for movie details</p>
                )}
        </>
    );
};

export default withRouter(MoviePage);