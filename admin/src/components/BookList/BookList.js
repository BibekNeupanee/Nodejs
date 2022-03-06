import React from "react";
import "./BookList.scss"

function BookList() {
  return (
    <div className="book-list">
      <header className="book-list__header">
        <span>All Books (21)</span>
        <div className="book-list__btn" id="add_books" title="Add New Book">
          + Add new
        </div>
      </header>
      <main className="book-list__main">
        <div className="book-list__item">
          <div className="book-list__left">
            <div className="book-list__name">Book 1</div>
            <div className="book-list__publisher">Publisher 1</div>
            <div className="book-list__price">$100</div>
          </div>
          <div className="book-list__right">
            <button className="book-list__btn" title="Edit">
              Edit
            </button>
            <button className="book-list__btn" title="Delete">
              Delete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookList;
