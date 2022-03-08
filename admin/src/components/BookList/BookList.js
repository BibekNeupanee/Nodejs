import React, { useEffect, useState } from "react";
import "./BookList.scss";

function BookList(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((json) => setData(json.books));
  }, []);

  return (
    <section className="books">
      <header>
        <span>All Books (21)</span>
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
        {data.map((book, i) => (
          <div className="item" key={i}>
            <div className="left">
              <div className="name">{book.name}</div>
              <div className="publisher">{book.publisher}</div>
              <div className="price">{book.price}</div>
            </div>
            <div className="right">
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

export default BookList;
