import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

const SimilarHeader = ({ title, numMovies, history }) => {
  return (
    <div className="row">
        <div className="col-2">
          <button onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
            <span>{" Back"}</span>
          </button>
        </div>
      <div className="col-md-6 offset-3">
        <h2 id= "similarheader">
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default withRouter(SimilarHeader);