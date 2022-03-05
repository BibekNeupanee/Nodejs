import React from "react";
import "./BookList.scss"

function BookList() {
  return (
    <div className="section" id="books">
      <header>
        <span>All Books (21)</span>
        <div class="btn" id="add_books" title="Add New Book">
          + Add new
        </div>
      </header>
      <main>
        <div class="item">
          <div class="left">
            <div class="name">Book 1</div>
            <div class="publisher">Publisher 1</div>
            <div class="price">$100</div>
          </div>
          <div class="right">
            <button class="btn" title="Edit">
              Edit
            </button>
            <button class="btn" title="Delete">
              Delete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookList;
