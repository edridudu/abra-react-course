import "./BookList.css"
import Book from "./Book"

const BookList = (props) => {
  const { title }  = props;
  const books = props.books;

  return (
    <div className="booksContainer">
      <h1>{title}</h1>
      {books.map((book, idx) => 
          <Book key={idx} name={book.name} publishDate={book.publishDate} />
      )}
    </div>
  );
}

export default BookList;