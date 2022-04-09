import { useState } from 'react';
import "./AddNewMovie.css"

const AddNewMovie = (props) => {
    let [name, setName] = useState("test");
    let [publishDate, setPublishDate] = useState("01/04/2020");

    const creatNewMovieHandler= (event) => {
        event.preventDefault();

        console.log(name,publishDate);
        props.onAddNewMovie(name,publishDate);
        
    }

    return (
        <>
        <form >
            <label >Name: </label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <label >Publish Date: </label>
            <input type="text" value={publishDate} onChange={(event) => setPublishDate(event.target.value)} />
            <button onClick={creatNewMovieHandler}>Add</button>
        </form>
        </>
    );
}

export default AddNewMovie;