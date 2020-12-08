import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getPeoples } from "../api/tmdb-api";

export const PeoplesContext = React.createContext(null)

const PeoplesContextProvider = props => {
  const [peoples, setPeoples] = useState([]);

  const addToMarks = peopleId => {
    setPeoples(peoples => {
      const index = peoples.map(p => p.id).indexOf(peopleId);
      StubAPI.add(peoples[index])
      peoples.splice(index, 1)
      return [...peoples]
    });
  };
  useEffect(() => {
    getPeoples().then(peoples => {
      setPeoples(peoples);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PeoplesContext.Provider
      value={{
        peoples: peoples,
        addToMarks: addToMarks
      }}
    >
      {props.children}
    </PeoplesContext.Provider>
  );
};

export default PeoplesContextProvider