import React from "react";
import People from "../peopleCard/";
import "./peopleList.css";

const PeopleList = ({peoples, action}) => {
  const peopleCards = peoples.map(p => (
    <People key={p.id} people={p} action={action}/>
  ));
  return <div className="row peoples bg-info">{peopleCards}</div>;
};

export default PeopleList;