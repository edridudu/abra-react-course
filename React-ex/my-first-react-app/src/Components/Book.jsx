import { useState } from 'react';

import "./Book.css";

const Book = (props) => {
  console.log("Book "+props.name+ " rendered");
  
  let [title, setTitle] = useState("Title 2");

  const onClickHandler = ( event ) => {
    setTitle("clicked !");
  }

    return (
      <div className="book">
        <h1>{title}</h1>
        <h1>{props.name}</h1>
        <h1>{props.publishDate}</h1>
        <button onClick={onClickHandler}>Click here</button>
      </div>
    );
}

export default Book;
