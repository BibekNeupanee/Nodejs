import React from "react";
import Author from "../Author/Author";
import BookList from "../BookList/BookList";
import BookType from "../BookType/BookType";
import Publisher from "../Publisher/Publisher";
import "./Dash.scss";

function Dash(props) {
  return (
    <main className="container">
      <BookList onShowPopUp={props.onShowPopUp} />
      <BookType onShowPopUp={props.onShowPopUp} />
      <Author onShowPopUp={props.onShowPopUp} />
      <Publisher onShowPopUp={props.onShowPopUp} />
    </main>
  );
}

export default Dash;
