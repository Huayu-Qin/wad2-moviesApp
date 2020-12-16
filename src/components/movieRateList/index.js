import React from "react";
import Movie from "../movieRateCard/";
import "./movieRateList.css";

const MovieRateList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default MovieRateList;