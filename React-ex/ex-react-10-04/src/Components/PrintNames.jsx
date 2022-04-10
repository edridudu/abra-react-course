import { useState } from 'react';

const PrintNames = ({ persons, ...props }) => {

    const [searchText, setSearchText] = useState("");

    const onSearchText = (event) => {
        console.log("onSearchText: ", event.target.value);
        setSearchText(event.target.value);
    }

    const filteredPersons = persons.filter(person => {
        return person.firstName.toLowerCase().includes(searchText.toLowerCase());
    });
    

    console.log(props.searchText);
    return (
        <>
            <input type="text" onChange={onSearchText} />
            {filteredPersons.map((person, idx) =>
                <p key={idx}>{person.firstName} {person.lastName}</p>
            )}
        </>
    )
}

export default PrintNames;