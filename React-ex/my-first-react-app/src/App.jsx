import './App.css';
import BookList from './Components/BookList';
import MovieList from './Components/MovieList';
import AddNewMovie from './Components/AddNewMovie';
import { useState } from 'react';

const defaultBooks = [
  { name: "Book 1", publishDate: "10/10/2020" },
  { name: "Book 3", publishDate: "05/10/2021" },
]

const movies = [
  { name: "movies 2", publishDate: "10/10/2020" },
  { name: "movies 1", publishDate: "05/10/2021" },
]

function App() {

  const [books, setBooks] = useState(defaultBooks);

  const NewBooks=[...books];


  const onAddNewMovie = (name, publishDate) => {
    NewBooks.push({ name, publishDate })
    setBooks(NewBooks);
  }

  return (
    <div>
      <div>
        <BookList title="My best books" books={books}></BookList>
      </div>

      <div>
        <MovieList title="My best Movies" movies={movies}></MovieList>
        <AddNewMovie onAddNewMovie={onAddNewMovie} />
      </div>
    </div>
  );
}

export default App;
