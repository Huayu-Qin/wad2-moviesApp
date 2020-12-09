import React from "react";
import PageTemplate from "../components/templatePeoplePage";
import ComplimentForm from '../components/complimentForm'

const ComplimentFormPage = props => {

  return (
      <PageTemplate people={props.location.state.people}>
          <ComplimentForm people={props.location.state.people} />
      </PageTemplate>
  );
};
export default ComplimentFormPage;