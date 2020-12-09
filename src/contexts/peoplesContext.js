import React, { useEffect, createContext, useReducer } from "react";
//import StubAPI from "../api/stubAPI";
import { getPeoples } from "../api/tmdb-api";

export const PeoplesContext = createContext(null)

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
        // Completed in next section
        break;
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
       // Completed in next section
    };
    useEffect(() => {
      getPeoples().then((peoples) => {
        dispatch({ type: "load", payload: { peoples } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <PeoplesContext.Provider
      value={{
        peoples: state.peoples,
        marks: state.marks,
        addToMarks: addToMarks,
        addCompliment: addCompliment
      }}
    >
      {props.children}
    </PeoplesContext.Provider>
  );
};

export default PeoplesContextProvider