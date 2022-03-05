import React from "react";
import BookList from "../BookList/BookList";
import "./Dash.scss"

function Dash() {
  return (
    <div className="body">
      <div className="books">
        <BookList />
      </div>
    </div>
  );
}

export default Dash;
