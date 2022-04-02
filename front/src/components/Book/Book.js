import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BooksCategory from "../BooksCategory/BooksCategory";
import BookType from "../BookType/BookType";
import "./Book.scss";

function Book() {
  const bookType = useFetch("http://localhost:3000/booktypes")?.types || [];
  return (
    <div className="books">
      {bookType.map((type, i) => (
        <div className="books__types" key={i}>
          <div className="books__label">{type.name}</div>
          <div className="books__detail">
            <BooksCategory typeId={type.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
