import React from "react";
import "./Publisher.scss"

function Publisher() {
  return (
    <div className="publisher">
      <header className="publisher__header">
        <span>All Publishers (5)</span>
        <div className="publisher__btn" id="add_books" title="Add New Book">
          + Add new
        </div>
      </header>
      <main className="publisher__main">
        <div className="publisher__item">
          <div className="publisher__left">
            <div className="publisher__name">Iqbal Jeffery</div>
          </div>
          <div className="publisher__right flow">
            <button className="publisher__btn" title="Edit">
              Edit
            </button>
            <button className="publisher__btn" title="Delete">
              Delete
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Publisher;
