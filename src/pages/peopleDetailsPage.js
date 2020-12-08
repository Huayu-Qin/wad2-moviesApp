import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from '../components/templatePeoplePage'
import PeopleDetails from "../components/peopleDetails";
import usePeople from "../hooks/usePeople";
//import PeopleHeader from "../components/headerPeople";
//import "./peoplePage.css";
//import { getPeople } from '../api/tmdb-api'

const PeoplePage = props => {
  const { id } = props.match.params
  const [people] = usePeople(id)
  return (
    <>
      {people ? (
        <PageTemplate people={people}>
          <PeopleDetails people={people} />
        </PageTemplate>
      ) : (
          <p>Waiting for people details</p>
        )}
    </>
  );
};

export default withRouter(PeoplePage);