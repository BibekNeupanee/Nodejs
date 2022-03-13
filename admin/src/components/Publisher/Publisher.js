import React, { useEffect, useState } from "react";
import "./Publisher.scss";

function Publisher(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/publishers")
      .then((response) => response.json())
      .then((json) => setData(json.publishers));
  }, []);
  return (
    <section className="publishers">
      <header>
        <span>All Publishers ({Object.keys(data).length})</span>
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
        {data.map((publisher, i) => (
          <div className="item" key={i}>
            <div className="left">
              <div className="name">{publisher.name}</div>
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

export default Publisher;
