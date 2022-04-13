import React, { useState } from "react";

function AddAuthorList() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const insertAuthor = async () => {
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("image", document.querySelector('input[name="image"]').files[0]);
    console.log(fd);
    console.log(document.querySelector('input[name="image"]').files[0]);
    await fetch("http://localhost:3000/authors", {
      method: "POST",
      headers: {},
      body: fd,
    });
  };

  return (
    <form
      className="add-author"
      encType="multipart/form-data"
      onSubmit={(e) => {
        insertAuthor();
        e.preventDefault();
      }}
    >
      <h1>Add Author</h1>
      <div className="name">
        <label>Enter Author Name: </label>
        <input
          type="text"
          value={formData.name}
          onInput={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <div className="image">
          <span>Insert Image: </span>
          <input name="image" type="file" accept=".jpg,.png,.jpeg" />
        </div>
      </div>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddAuthorList;
