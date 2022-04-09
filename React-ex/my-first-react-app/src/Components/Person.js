import './Person.css'

const Person = (props) => {
    const { name, city, gender } = props;
    
    return (
        <div className="person-card">
            <p>{name}</p>
            <p>{city}</p>
            <p>{gender}</p>
        </div>
    )
}

export default Person;