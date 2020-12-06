import React, { useState, useEffect } from "react";
import Header from "../components/headerPeopleList";
import PeopleList from "../components/peopleList";
// import FilterControls from "../components/filterControls/index2";

const PeopleListPage = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
      .then(peoples => {
        setPeoples(peoples);
      });
  }, []);
  return (
    <>
      <Header numPeoples={peoples.id} />
      {/* <FilterControls /> */}
      <PeopleList peoples={peoples} />
    </>
  );
};

export default PeopleListPage;