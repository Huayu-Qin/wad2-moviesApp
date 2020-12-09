import React from "react";
import StubAPI from "../api/stubAPI";
import Pagetemplate from "../components/templatePeopleListPage"
import AddComplimentButton from '../components/buttons/addCompliment'


const MarkPeoplePage = props => {
    
    return (
        <Pagetemplate
            peoples={StubAPI.getAllPeople()}
            title={'Marked Actors'}
            action={people => <AddComplimentButton people={people} />}
        />
    );
}

export default MarkPeoplePage