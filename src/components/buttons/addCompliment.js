import React from "react";
import { Link } from "react-router-dom";

const ComplimentButton = ({ people }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/compliments/form`,
        state: {
          people: people
        }
      }}
    >
      Give a compliment
    </Link>
  );
};

export default ComplimentButton;