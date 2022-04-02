import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BooksCategory from "../BooksCategory/BooksCategory";
import "./Book.scss";

function Book() {
  const bookType = useFetch("http://localhost:3000/booktypes")?.types || [];
  return (
    <div className="books">
      {bookType.map((type, i) => (
        <div className="books__types" key={i}>
          <div className="books__label">
            {type.name} <Link to={"/" + type.id} className="books__see-more">See More&gt;&gt;&gt;</Link>
          </div>
          <div className="books__detail">
            <BooksCategory typeId={type.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
