import React from "react";
import "./BookList.scss"

function BookList() {
  return (
    <div className="section">
      <header>
        <span>All Books (21)</span>
        <div className="btn" id="add_books" title="Add New Book">
          + Add new
        </div>
      </header>
      <main>
        <div className="item">
          <div className="left">
            <div className="name">Book 1</div>
            <div className="publisher">Publisher 1</div>
            <div className="price">$100</div>
          </div>
          <div className="right">
            <button className="btn" title="Edit">
              Edit
            </button>
            <button className="btn" title="Delete">
              Delete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookList;
