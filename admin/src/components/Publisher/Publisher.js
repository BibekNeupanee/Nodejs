import React from "react";

function Publisher() {
  return (
    <div className="section">
      <header>
        <span>All Publishers (5)</span>
        <div className="btn" id="add_books" title="Add New Book">
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

export default Publisher;
