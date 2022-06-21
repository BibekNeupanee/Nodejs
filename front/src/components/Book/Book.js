import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";x
import BooksCategory from "../BooksCategory/BooksCategory";
import "./Book.scss";

function Book() {
  const bookType = useFetch("http://localhost:3000/booktypes")?.types || [];
  return (
    <>
      {bookType.map((type, i) => (
        <section class="bestselling">
          <header>
            <div class="title">{type.name}</div>
            <Link to={"/" + type.id}>
              See All <i class="fa-solid fa-chevron-right"></i>
            </Link>
          </header>
          <BooksCategory typeId={type.id} />
        </section>
      ))}
    </>
  );
}

export default Book;
