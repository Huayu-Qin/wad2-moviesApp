import React from "react";
import StubAPI from "../api/stubAPI";
import Pagetemplate from "../components/templatePeopleListPage"


const MarkPeoplePage = props => {
    const toDo = () => true;
    return (
        <Pagetemplate
            peoples={StubAPI.getAllPeople()}
            title={'Marked People'}
            buttonHandler={toDo}
        />
    );
}

export default MarkPeoplePage