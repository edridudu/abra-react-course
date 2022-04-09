import "./MovieList.css"
import Movie from "./Movie";

const MovieList = (props) => {
    const { title } = props;
    const movies = props.movies;

    return (
        <div className="moviesContainer">
            <h1>{title}</h1>
            {
                movies.map((movie, index) => {
                    return <Movie key={index} name={movie.name} publishDate={movie.publishDate} />
                })
            }
        </div>
    )
}

export default MovieList;