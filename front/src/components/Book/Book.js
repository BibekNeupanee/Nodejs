import React from "react";
import "./Book.scss";
function Book(book) {
  return (
    <div className="book">
      <img src={book.image} alt={book.title} />
      <div className="book-title">{book.title}</div>
      <div className="book-autors">
        {book.authors.map((author, i) => (
          <span key={i}>{author}</span>
        ))}
      </div>
    </div>
  );
}

export default Book;
