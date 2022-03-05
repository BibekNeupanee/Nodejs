import React from "react";
import "./Author.scss"

function Author() {
  return (
    <div className="section">
      <header>
        <span>All Authors (3)</span>
        <div className="btn" id="add_books" title="Add New Author">
          + Add new
        </div>
      </header>
      <main>
        <div className="item">
          <div className="left">
            <div className="name">Iqbal Jeffery</div>
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

export default Author;
