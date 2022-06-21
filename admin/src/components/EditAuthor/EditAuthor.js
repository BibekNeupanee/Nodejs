import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

function EditAuthor(props) {
  const authors =
    useFetch(`http://localhost:3000/authors/${props.author.id}`)?.authors || [];

  const [formData, setFormData] = useState({
    name: props.author.name,
  });

  const btnSave = async function () {
    const fd = new FormData();
    fd.append("id", props.author.id);
    fd.append("name", formData.name);
    fd.append("image", document.querySelector('input[name="image"]').files[0]);
    console.log(formData.name);
    console.log(document.querySelector('input[name="image"]').files[0]);
    await fetch("http://localhost:3000/authors", {
      method: "PUT",
      headers: {},
      body: fd,
    });
  };

  return (
    <form
      className="add-author"
      encType="multipart/form-data"
      onSubmit={(e) => {
        btnSave();
        // e.preventDefault();
      }}
    >
      <h3>Edit Author</h3>
      <div className="new-author">
        <label>Enter New Author</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="image">
        <span>Insert Image: </span>
        <input name="image" type="file" accept=".jpg,.png,.jpeg" />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditAuthor;
