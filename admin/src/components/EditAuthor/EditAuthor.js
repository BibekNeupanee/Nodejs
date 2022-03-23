import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

function EditAuthor(props) {
  const [author, setAuthor] = useState("");

  const authors =
    useFetch(`http://localhost:3000/authors/${props.authorId}`)?.authors || [];

  const btnSave = async function () {
    await fetch("http://localhost:3000/authors", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.authorId,
        author: author,
      }),
    });
  };

  return (
    <form className="edit-author">
      <h3>Edit Author</h3>
      {authors.map((author, i) => (
        <label className="old-type" key={i}>
          <b>Previous Author:</b> {author.name}
        </label>
      ))}
      <div className="new-author">
        <label>Enter New Author</label>
        <input type="text" onInput={(e) => setAuthor(e.target.value)} />
      </div>
      <button
        onClick={(e) => {
          btnSave();
        }}
      >
        Save
      </button>
    </form>
  );
}

export default EditAuthor;
