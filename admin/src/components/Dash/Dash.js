import React from "react";
import BookList from "../BookList/BookList";
import BookType from "../BookType/BookType";
import "./Dash.scss";

function Dash() {
  return (
    <div className="body">
      <div className="books">
        <BookList />
      </div>
      <div className="types">
        <BookType />
      </div>
    </div>
  );
}

export default Dash;
