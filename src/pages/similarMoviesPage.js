import React, { useEffect, useState } from "react";
import SimilarPageTemplate from "../components/templateSimilarMovieListPage";
import { getSimilarMovies } from "../api/tmdb-api";
//import AddToFavoritesButton from '../componentsttons/addToFavorites'

const SimilarMoviesPage = props => {
  const { id } = props.match.params;
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(id).then(similarMovies => {
      setSimilarMovies(similarMovies);
    });
        
  }, [id]);
  return (
    <SimilarPageTemplate 
      title= {`Similar Movies`}
      movies={similarMovies}
      action={(movie) => {
       // return <AddToFavoritesButton movie={movie} /> 
      }}
    />
);
};

export default SimilarMoviesPage;
