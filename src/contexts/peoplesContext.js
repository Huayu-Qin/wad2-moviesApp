import React, { useEffect, createContext, useReducer } from "react";
import { getPeoples } from "../api/tmdb-api";

export const PeoplesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-mark":
      return {
        peoples: state.peoples.map((p) =>
          p.id === action.payload.people.id ? { ...p, mark: true } : p
        ),
      };
    case "load":
      return { peoples: action.payload.peoples };
    case "add-compliment":
      return {
        peoples: state.peoples.map((p) =>
          p.id === action.payload.people.id
            ? { ...p, compliment: action.payload.compliment }
            : p
        ),
      };
      
    default:
      return state;
  }
};

const PeoplesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { peoples: [] });

  const addToMarks = (peopleId) => {
    const index = state.peoples.map((p) => p.id).indexOf(peopleId);
    dispatch({ type: "add-mark", payload: { people: state.peoples[index] } });
  };

  const addCompliment = (people, compliment) => {
    dispatch({ type: "add-compliment", payload: { people, compliment } });
  };
  useEffect(() => {
    getPeoples().then((peoples) => {
      dispatch({ type: "load", payload: { peoples } });
    });
    
  }, []);

  return (
    <PeoplesContext.Provider
      value={{
        peoples: state.peoples,
        marks: state.marks,
        addToMarks: addToMarks,
        addCompliment: addCompliment,
      }}
    >
      {props.children}
    </PeoplesContext.Provider>
  );
};

export default PeoplesContextProvider;