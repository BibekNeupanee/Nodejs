import React, { useEffect, useState } from "react";
import AddAuthorList from "../AddAuthorList/AddAuthorList";
import EditAuthor from "../EditAuthor/EditAuthor";
import "./Author.scss";

async function deleteBtn(id) {
  const deleteAuthor = await fetch(
    `http://localhost:3000/delete/author/${id}`,
    {
      method: "DELETE",
    }
  );
  const response = await deleteAuthor.json();
  if (response.errorMessage) {
    alert(response.errorMessage);
  } else if (response.successMessage) {
    alert(response.successMessage);
    window.location.reload();
  }
}

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
          onClick={(_) => props.onShowPopUp(<AddAuthorList />)}
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
              <button
                className="btn"
                title="Edit"
                onClick={(_) =>
                  props.onShowPopUp(<EditAuthor authorId={author.id} />)
                }
              >
                Edit
              </button>
              <button
                className="btn"
                title="Delete"
                onClick={(_) => deleteBtn(author.id)}
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

export default Author;
