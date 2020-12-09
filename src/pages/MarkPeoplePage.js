import React, { useContext } from "react";
//import StubAPI from "../api/stubAPI";
import PeopleListPageTemplate from "../components/templatePeopleListPage"
import AddComplimentButton from '../components/buttons/addCompliment'
import {PeoplesContext} from '../contexts/peoplesContext'


const MarkPeoplePage = props => {
    const context = useContext(PeoplesContext)
    const marks = context.peoples.filter(p => p.mark)
    return (
        <PeopleListPageTemplate
            peoples={marks}
            title='Marked Actors'
            action={people => <AddComplimentButton people={people} />}
        />
    );
}

export default MarkPeoplePage