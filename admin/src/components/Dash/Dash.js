import React from "react";
import Author from "../Author/Author";
import BookList from "../BookList/BookList";
import BookType from "../BookType/BookType";
import Publisher from "../Publisher/Publisher";
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
      <div className="authors">
        <Author />
      </div>
      <div className="publishers">
        <Publisher />
      </div>
    </div>
  );
}

export default Dash;
