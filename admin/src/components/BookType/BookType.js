import React from "react";
import "./BookType.scss";

function BookType(props) {
  const bookTypes = [{ type: "Sci-FI" }, { type: "Advanture" }];
  return (
    <section className="types">
      <header>
        <span>All Book Categories (4)</span>
        <div
          className="btn"
          onClick={(_) => props.onShowPopUp()}
          id="add_books"
          title="Add New Book"
        >
          + Add new
        </div>
      </header>
      <main>
        {bookTypes.map((bookType, i) => (
          <div className="item" key={i}>
            <div className="left">
              <div className="name">{bookType.type}</div>
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
        ))}
      </main>
    </section>
  );
}

export default BookType;
