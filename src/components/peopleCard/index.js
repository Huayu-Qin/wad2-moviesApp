import React from "react";
import "./peopleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import { Link } from 'react-router-dom'

const PeopleCard = props => {

  const handleAddToMarks = e => {
    e.preventDefault()
    props.buttonHandler(props.people.id) 
  }

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <Link to={`/people/${props.people.id}`}>
          <img
            className="card-img-tag center "
            alt={props.people.name}
            src={
              props.people.profile_path
                ? `https://image.tmdb.org/t/p/w500/${props.people.profile_path}`
                : "./film-poster-placeholder.png"
            }
          />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{props.people.name}</h4>
          {/* <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {props.people.birthday}</span>
          </p> */}
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.popularity}</span>
          </p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn w-100 btn-primary"
          onClick={handleAddToMarks}>
            Mark the person
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;