import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import "./Book.scss";

function Book() {
  const data = useFetch("http://localhost:3000/books")?.books || [];

  return (
    <div className="books">
      {data.map((book, i) => (
        <div className="books__list" key={i}>
          <Link to={"/book-detail/" + book.id} className="books__link">
            <img
              src="https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
              alt={book.name}
            />
            <div className="books__title">{book.name}</div>
          </Link>
          <div className="books__autors">
            <BookAuthorList bookId={book.id} />
          </div>
          <div className="book_type">
            <BookType btId={book.bookTypeId} />
          </div>
          <div className="books__price">
            <b>Rs. {book.price}</b>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
