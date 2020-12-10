import React, {useContext} from "react";
import PeopleListPageTemplate from "../components/templatePeopleListPage";
import AddComplimentButton from '../components/buttons/addCompliment'
import {PeoplesContext} from '../contexts/peoplesContext'

const MarkPeoplesPage = props => {
  const context = useContext(PeoplesContext);
  const marks = context.peoples.filter( p => p.mark )
  return (
    <PeopleListPageTemplate
      peoples={marks}
      title={"Marked People"}
      action={people => <AddComplimentButton people={people} />}
    />
  );
};

export default MarkPeoplesPage;