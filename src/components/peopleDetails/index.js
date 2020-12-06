import React from "react";
import "./peopleDetails.css";

export default ({ people }) => {
  const peopleGender = (people) => {
    return (people.gender === 1) ? 'Female' : 'Male'
  };
  return (
    <>
      <h4>Biography</h4>
      <p>{people.biography}</p>
      <ul className="list-group list-group-horizontal">
        <li key="bdh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="bdt" className="list-group-item ">
          {people.birthday}
        </li>
        <li key="gdh" className="list-group-item list-group-item-dark">
          Gender
        </li>
        <li key="gdv" className="list-group-item ">
          {peopleGender}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="aka" className="list-group-item list-group-item-dark">
          Also know as
        </li>
        <li key="bpt" className="list-group-item ">
          {people.also_known_as}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="bph" className="list-group-item list-group-item-dark">
          Birthplace
        </li>
        <li key="bpt" className="list-group-item ">
          {people.place_of_birth}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="hph" className="list-group-item list-group-item-dark">
          Profession
        </li>
        <li key="hpt" className="list-group-item ">
          {people.known_for_department}
        </li>
      </ul>
    </>
  );
};
