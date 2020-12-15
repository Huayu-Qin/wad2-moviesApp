import React, { useContext } from "react";
//import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'

import { MoviesContext } from '../contexts/moviesContext'
//import AddToWatchListButton from '../components/buttons/addToWatchList'

const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => {
  // return <AddToWatchListButton movie={movie} />
      }}
    />
  );
};

export default TopRatedMoviesPage;