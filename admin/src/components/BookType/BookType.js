import React, { useEffect, useState } from "react";
import AddBookType from "../AddBookType/AddBookType";
import "./BookType.scss";

function BookType(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/book-types")
      .then((response) => response.json())
      .then((json) => setData(json.types));
  }, []);

  return (
    <section className="types">
      <header>
        <span>All Book Type ({Object.keys(data).length})</span>
        <div
          className="btn"
          onClick={(_) => props.onShowPopUp(<AddBookType />)}
          id="add_books"
          title="Add New Book"
        >
          + Add new
        </div>
      </header>
      <main>
        {data.map((bookType, i) => (
          <div className="item" key={i}>
            <div className="left">
              <div className="name">{bookType.name}</div>
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
