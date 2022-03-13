import React from "react";
import "./BookListForm.scss"

function BookListForm() {
  return (
    <form>
      <label className="lbl-add-book"> Add Book</label>
      <label>Book Name: </label>
      <input type="text" className="txt" />
      <label> Author: </label>
      <label>Choose Book: </label>
      <input type="file" name="file" accept=".pdf" />
    </form>
  );
}

export default BookListForm;
