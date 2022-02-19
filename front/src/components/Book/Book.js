import React from "react";
import { Link } from "react-router-dom";
import "./Book.scss";
function Book(book) {
  return (
    <div className="book">
      <img src={book.image} alt={book.title} />
      <div className="book-title">
        <Link to={"/book-detail/"+book.id} className="book-title">{book.title}</Link>
      </div>
      <div className="book-autors">
        {book.authors.map((author, i) => (
          <span key={i}>{author}</span>
        ))}
      </div>
    </div>
  );
}

export default Book;
