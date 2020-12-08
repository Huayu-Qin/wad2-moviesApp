import React, { useState, useEffect } from "react";
import PeopleHeader from "../components/headerPeople";
import PeopleDetails from "../components/peopleDetails";
import "./peoplePage.css";
import { getPeople } from '../api/tmdb-api'

const PeoplePage = props => {
  const { id } = props.match.params
  const [people, setPeople] = useState(null)
  useEffect(() => {
    getPeople(id).then(people => {
      setPeople(people);
    });
  }, [id])
  return (
    <>
      {people ? (
        <>
          <PeopleHeader people={people} />
          <div className="row">
            <div className="col-3">
              <img
                src={
                  people.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                    : "./film-poster-placeholder.png"
                }
                className="people" height="500px"
                alt={people.name}
              />
            </div>
            <div className="col-9">
              <PeopleDetails people={people} />
            </div>
          </div>
        </>
      ) : (
          <p>Waiting for movie details</p>
        )}
    </>
  );
};

export default PeoplePage;