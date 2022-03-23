import React, { useState } from "react";

async function insertAuthor(author) {
  await fetch("http://localhost:3000/authors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author,
    }),
  });
}

function AddAuthorList() {
  const [author, setAuthor] = useState("");
  return (
    <form className="add-author">
      <h1>Add Author</h1>
      <div className="name">
        <label>Enter Author Name: </label>
        <input
          type="text"
          value={author}
          onInput={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button onClick={() => insertAuthor(author)}>Add</button>
    </form>
  );
}

export default AddAuthorList;
