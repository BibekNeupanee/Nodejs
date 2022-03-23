import React, { useEffect, useState } from "react";
import AddBookType from "../AddBookType/AddBookType";
import EditBookType from "../EditBookType/EditBookType";
import "./BookType.scss";

async function deleteBtn(id) {
  const deleteBookType = await fetch(`http://localhost:3000/booktype/${id}`, {
    method: "DELETE",
  });
  const response = await deleteBookType.json();
  if (response.errorMessage) {
    alert(response.errorMessage);
  } else if (response.successMessage) {
    alert(response.successMessage);
    window.location.reload();
  }
}

function BookType(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/booktypes")
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
              <button
                className="btn"
                title="Edit"
                onClick={(_) =>
                  props.onShowPopUp(<EditBookType typeId={bookType.id} />)
                }
              >
                Edit
              </button>
              <button
                className="btn"
                title="Delete"
                onClick={(_) => deleteBtn(bookType.id)}
              >
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
