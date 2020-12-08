import React, { useState, useEffect } from "react";
//import Header from "../components/headerPeopleList";
//import PeopleList from "../components/peopleList";
// import FilterControls from "../components/filterControls/index2";
import StubAPI from '../api/stubAPI'
import PageTemplate from '../components/templatePeopleListPage'

const PeopleListPage = () => {
  //const [titleFilter] = useState(""); 
  const [peoples, setPeoples] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results)
      .then(peoples => {
        setPeoples(peoples);
      });
  }, []);

  // let displayedPeoples = peoples
  //   .filter(p => {
  //     return p.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
  //   })

  const addToMarks = peopleId => {
    setPeoples(peoples => {
      const index = peoples.map(p => p.id).indexOf(peopleId)
      StubAPI.add(peoples[index])
      let newPeoplesState = [...peoples]
      newPeoplesState.splice(index, 1);
      return newPeoplesState;
    });
  };

  return (
    <PageTemplate
      title='Marked People'
      /* <FilterControls /> */
      peoples={peoples}
      buttonHandler={addToMarks}
    />
  );
};

export default PeopleListPage;