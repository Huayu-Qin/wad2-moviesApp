import React from "react";
import Header from "../components/headerPeopleList";
import PeopleList from "../components/peopleList";
//import FilterControls from "../components/filterControls";

const PeopleListPage = ({peoples}) => {
  return (
    <>
      <Header numPeoples={peoples.length} />
      {/* <FilterControls /> */}
      <PeopleList peoples={peoples} />
    </>
  );
};

export default PeopleListPage;