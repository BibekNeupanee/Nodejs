import React from "react";

function Publisher() {
  return (
    <div className="section">
      <header>
        <span>All Publishers (5)</span>
        <div class="btn" id="add_books" title="Add New Book">
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

export default Publisher;
