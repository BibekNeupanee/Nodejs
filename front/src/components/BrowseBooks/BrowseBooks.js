import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import "./BrowseBooks.scss";

function BrowseBooks() {
  const { id } = useParams();
  const books =
    useFetch(`http://localhost:3000/books/types/${id}`)?.books || [];
  return (
    <div className="all-book">
      {books.map((book, i) => (
        <div className="all-book__list" key={i}>
          <Link to={"/book-detail/" + book.id} className="category__link">
            <img
              src={
                book.image ||
                "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
              }
              alt={book.name}
            />
            <div className="all-book__title">{book.name}</div>
          </Link>
          <div className="all-book__authors">
            <BookAuthorList bookId={book.id} />
          </div>
          <div className="all-book__type">
            <BookType btId={book.bookTypeId} />
          </div>
          <div className="all-book__price">Rs. {book.price}</div>
        </div>
      ))}
    </div>
  );
}

export default BrowseBooks;
