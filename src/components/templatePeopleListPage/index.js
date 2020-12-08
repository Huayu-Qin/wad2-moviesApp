import React, { useState } from "react";
import Header from "../headerPeopleList";
import PeopleList from "../peopleList";
//import FilterControls from "../filterControls";

const PeopleListPageTemplate = ({ peoples, name, buttonHandler }) => {
    const [nameFilter] = useState("");
    //   const [genreFilter, setGenreFilter] = useState("0");
    //   const genre = Number(genreFilter)
    let displayedPeoples = peoples
        .filter(p => {
            return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
    //     .filter(m => {
    //       return  genre > 0
    //         ? m.genre_ids.includes(Number(genreFilter))
    //         : true;
    //     });

    //   const handleChange = (type, value) => {
    //     if (type === "name") setNameFilter(value);
    //     else setGenreFilter(value);
    //   };

    return (
        <>
            <Header title={name} numPeoples={displayedPeoples.length} />
            {/* <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/> */}
            <PeopleList
                buttonHandler={buttonHandler}
                peoples={displayedPeoples}
            ></PeopleList>
        </>
    );
};

export default PeopleListPageTemplate;