import React, { useContext } from "react";
//import Header from "../components/headerPeopleList";
//import PeopleList from "../components/peopleList";
// import FilterControls from "../components/filterControls/index2";
//import StubAPI from '../api/stubAPI'
import PageTemplate from '../components/templatePeopleListPage'
import { PeoplesContext } from "../contexts/peoplesContext";
import AddToMarksButton from '../components/buttons/addToMarks'
const PeopleListPage = () => {
  //const [titleFilter] = useState(""); 
  //const [peoples, setPeoples] = useState([])
  
  const context = useContext(PeoplesContext)
  
 
  // useEffect(() => {
  //   getPeoples().then(peoples => {
  //     setPeoples(peoples);
  //   });

  // }, []);

  // let displayedPeoples = peoples
  //   .filter(p => {
  //     return p.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
  //   })

  // const addToMarks = peopleId => {
  //   setPeoples(peoples => {
  //     const index = peoples.map(p => p.id).indexOf(peopleId)
  //     StubAPI.add(peoples[index])
  //     let newPeoplesState = [...peoples]
  //     newPeoplesState.splice(index, 1);
  //     return newPeoplesState;
  //   });
  // };
  return (
    <PageTemplate
      title='Marked People'
      /* <FilterControls /> */
      peoples={context.peoples}
      action={(people)=> {
        return <AddToMarksButton people={people} />
      }}
    />
  );
};

export default PeopleListPage;