import React, { useEffect, useState } from "react";
import BookList from "../BookList/BookList";
import "./Author.scss";

function Author(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/authors")
      .then((response) => response.json())
      .then((json) => setData(json.books));
  }, []);
  return (
    <section className="authors">
      <header>
        <span>All Authors (3)</span>
        <div
          className="btn"
          onClick={(_) => props.onShowPopUp()}
          id="add_books"
          title="Add New Author"
        >
          + Add new
        </div>
      </header>
      <main>
        {data.map((author, i) => (
          <div className="item" key={i}>
            <div className="left">
              <div className="name">{author.name}</div>
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

export default Author;
