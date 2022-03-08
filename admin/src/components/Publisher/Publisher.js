import React from "react";
import "./Publisher.scss";

function Publisher(props) {
  const publishers = [{ name: "KEC" }, { name: "Ashmita" }, { name: "ABCD" }];
  return (
    <section className="publishers">
      <header>
        <span>All Publishers (5)</span>
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
        {publishers.map((publisher, i) => (
          <div className="item"key={i}>
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
