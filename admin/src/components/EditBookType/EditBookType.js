import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

function EditBookType(props) {
  const [newType, setNewType] = useState("");
  const types =
    useFetch(`http://localhost:3000/booktypes/${props.typeId}`)?.bookType ||
    [];
  const btnSave = async function () {
    await fetch("http://localhost:3000/booktypes", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.typeId,
        bookType: newType,
      }),
    });
  };
  return (
    <form className="edit-booktype">
      <h3>Edit Book</h3>
      {types.map((type, i) => (
        <label className="old-type" key={i}>
          <b>Previous Book Type:</b> {type.name}
        </label>
      ))}
      <div className="new-type">
        <label>Enter New Book Type:</label>
        <input type="text" onInput={(e) => setNewType(e.target.value)} />
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

export default EditBookType;
