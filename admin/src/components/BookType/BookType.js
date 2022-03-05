import React from "react";
import "./BookType.scss"

function BookType() {
  return (
    <div className="section">
      <header>
        <span>All Book Categories (4)</span>
        <div className="btn" id="add_books" title="Add New Book">
          + Add new
        </div>
      </header>
      <main className="">
        <div className="item">
          <div className="left">
            <div className="name">Adventure</div>
          </div>
          <div className="right flow">
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

export default BookType;
