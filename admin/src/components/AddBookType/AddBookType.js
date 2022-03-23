import React, { useState } from "react";

async function insertType(type) {
  await fetch("http://localhost:3000/booktypes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
    }),
  });
}

function AddBookType() {
  const [type, setType] = useState("");
  return (
    <form className="add-type">
      <h1>Add Type</h1>
      <div className="name">
        <label>Enter Type: </label>
        <input
          type="text"
          value={type}
          onInput={(e) => setType(e.target.value)}
        />
      </div>
      <button onClick={() => insertType(type)}>Add</button>
    </form>
  );
}
export default AddBookType;
