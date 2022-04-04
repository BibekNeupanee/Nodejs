import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import "./Search.scss";

function Search() {
  const { keyword } = useParams();

  const data =
    useFetch("http://localhost:3000/search/" + keyword)?.search || [];

  return (
    <div className="search-books">
      <h1>All Books ({Object.keys(data).length})</h1>
      {data.map((book, i) => (
        <div className="search-books__list" key={i}>
          <Link to={"/book-detail/" + book.id} className="search-books__link">
            <img
              src={
                book.image ||
                "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
              }
              alt={book.name}
            />
            <div className="search-books__title">{book.name}</div>
          </Link>
          <div className="search-books__autors">
            <BookAuthorList bookId={book.id} />
          </div>
          <div className="book_type">
            <BookType btId={book.bookTypeId} />
          </div>
          <div className="search-books__price">
            <b>Rs. {book.price}</b>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
