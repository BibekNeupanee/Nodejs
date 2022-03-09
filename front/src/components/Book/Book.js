import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import settings from "../../resources/settings.png";
import "./Book.scss";

function BookAuthorList(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch(`http://localhost:3000/bookauthors/${props.bookId}`)
      .then((response) => response.json())
      .then((json) => setData(json.authors));
  }, []);
  return data.map((author, i) => <span key={i}>{author.name}</span>);
}

function Book() {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((json) => {
        setData(json.books);
      });
  }, []);

  return (
    <div className="books">
      {data.map((book, i) => (
        <div className="books__list" key={i}>
          <img src="https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png" alt={book.title} />
          <Link to={"/book-detail/" + book.id} className="books__title">
            {book.name}
          </Link>
          <div className="books__autors">
            <BookAuthorList bookId={book.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Book;
