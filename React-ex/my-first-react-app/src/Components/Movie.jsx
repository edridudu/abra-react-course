import { useState } from 'react';
import "./Movie.css"

const Movie = (props) => {
    console.log("Movie "+props.name+ " rendered");


    let [title, setTitle] = useState("Movie Title");

    const onClickHandler = (event) => {
        setTitle("clicked !");
    }

    const { name, publishDate } = props;
    return (
        <div className="movie">
            <h1>{title}</h1>
            <h1>{name}</h1>
            <h2>{publishDate}</h2>
            <button onClick={onClickHandler}>Click here</button>
        </div>
    )
}

export default Movie;