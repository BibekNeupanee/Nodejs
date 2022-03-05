import React from "react";
import "./Author.scss"

function Author() {
  return (
    <div className="section">
      <header>
        <span>All Authors (3)</span>
        <div class="btn" id="add_books" title="Add New Author">
          + Add new
        </div>
      </header>
      <main>
        <div class="item">
          <div class="left">
            <div class="name">Iqbal Jeffery</div>
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

export default Author;
