import React, {useContext} from "react";
import WatchListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlists = context.upcoming.filter( m => m.watchlist )
  return (
    <WatchListPageTemplate
      movies={watchlists}
      title={"WatchList Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchListMoviesPage; 