import React from "react";
import "./Author.scss"

function Author() {
  return (
    <div className="author">
      <header className="author__header">
        <span>All Authors (3)</span>
        <div className="author__btn" id="add_books" title="Add New Author">
          + Add new
        </div>
      </header>
      <main className="author__main">
        <div className="author__item">
          <div className="author__left">
            <div className="author__name">Iqbal Jeffery</div>
          </div>
          <div className="author__right flow">
            <button className="author__btn" title="Edit">
              Edit
            </button>
            <button className="author__btn" title="Delete">
              Delete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Author;
