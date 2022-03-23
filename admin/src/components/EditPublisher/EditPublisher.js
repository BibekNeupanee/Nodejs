import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

function EditPublisher(props) {
  const [publisher, setPublisher] = useState("");

  const publishers =
    useFetch(`http://localhost:3000/publishers/${props.publisherId}`)
      ?.publisher || [];

  const btnSave = async function () {
    await fetch("http://localhost:3000/update/publisher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.publisherId,
        publisher,
      }),
    });
  };

  return (
    <form className="edit-publisher">
      <h3>Edit Publisher</h3>
      {publishers.map((publisher, i) => (
        <label className="old-publisher" key={i}>
          <b>Previous Publisher:</b> {publisher.name}
        </label>
      ))}
      <div className="new-publisher">
        <label>Enter New Publisher: </label>
        <input type="text" onInput={(e) => setPublisher(e.target.value)} />
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

export default EditPublisher;
