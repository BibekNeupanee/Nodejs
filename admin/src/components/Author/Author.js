import React, { useEffect, useState } from "react";
import "./Author.scss";

function Author(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/authors")
      .then((response) => response.json())
      .then((json) => setData(json.authors));
  }, []);
  return (
    <section className="authors">
      <header>
        <span>All Authors ({Object.keys(data).length})</span>
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
