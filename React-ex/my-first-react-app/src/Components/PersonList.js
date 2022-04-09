import './PersonList.css'
import Person from './Person' 

const PersonList = (props) => {
    const persons = props.persons;

    return (
        <>
          <Person name={persons[0].name} 
                  city={persons[0].city}
                  gender={persons[0].gender}>
          </Person>  

          <Person name={persons[1].name} 
                  city={persons[1].city}
                  gender={persons[1].gender}>
          </Person>  

        </>
    )
}

export default PersonList;