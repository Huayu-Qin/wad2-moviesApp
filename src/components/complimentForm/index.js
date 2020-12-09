import React, {useContext } from "react";
import "./complimentForm.css";
import useForm from "react-hook-form";
import {PeoplesContext} from '../../contexts/peoplesContext'
import { withRouter } from "react-router-dom";

const ComplimentForm = ({ people, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(PeoplesContext);

  const onSubmit = data => {
    context.addCompliment(people, data)
    history.push("/people/marks");
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Give a compliment</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          defaultValue={people.compliment ? people.compliment.author : ""}
          name="author"
          ref={register({ required: "Please leave a name" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your compliment"
          defaultValue={people.compliment ? people.compliment.content : ""}
          name="content"
          ref={register({
            required: "No compliment text",
            minLength: { value: 10, message: "Compliment is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default withRouter(ComplimentForm);