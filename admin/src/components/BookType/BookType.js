import React from "react";
import "./BookType.scss"

function BookType() {
  return (
    <div className="book-type">
      <header className="book-type__header">
        <span>All Book Categories (4)</span>
        <div className="book-type__btn" id="add_books" title="Add New Book">
          + Add new
        </div>
      </header>
      <main className="book-type__main">
        <div className="book-type__item">
          <div className="book-type__left">
            <div className="book-type__name">Adventure</div>
          </div>
          <div className="book-type__right flow">
            <button className="book-type__btn" title="Edit">
              Edit
            </button>
            <button className="book-type__btn" title="Delete">
              Delete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookType;
