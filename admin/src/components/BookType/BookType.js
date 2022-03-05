import React from "react";
import "./BookType.scss"

function BookType() {
  return (
    <div className="section">
      <header>
        <span>All Book Categories (4)</span>
        <div class="btn" id="add_books" title="Add New Book">
          + Add new
        </div>
      </header>
      <main class="">
        <div class="item">
          <div class="left">
            <div class="name">Adventure</div>
          </div>
          <div class="right flow">
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

export default BookType;
