import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import "./BooksCategory.scss";

function BooksCategory(props) {
  const books =
    useFetch(`http://localhost:3000/books/types/${props.typeId}`)?.books || [];
  return (
    <div className="category">
      {[...books].slice(0, 5).map((book, i) => (
        <div className="category__list" key={i}>
          <Link to={"/book-detail/" + book.id} className="category__link">
            <img
              src="https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
              alt={book.name}
            />
            <div className="category__title">{book.name}</div>
          </Link>
          <div className="category__autors">
            <BookAuthorList bookId={book.id} />
          </div>
          <div className="category_type">
            <BookType btId={book.bookTypeId} />
          </div>
          <div className="category__price">
            <b>Rs. {book.price}</b>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BooksCategory;
