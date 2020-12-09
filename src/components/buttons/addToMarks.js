import React, { useContext } from "react";
import {PeoplesContext} from "../../contexts/peoplesContext";

const AddToMarkButton = ({ people }) => {
  const context = useContext(PeoplesContext);

  const handleAddToMark = e => {
    e.preventDefault();
    context.addToMarks(people.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToMark}
    >
      Mark the Actor
    </button>
  );
};

export default AddToMarkButton;