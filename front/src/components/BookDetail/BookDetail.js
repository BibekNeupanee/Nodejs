import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetail.scss";

function BookAuthorList(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch(`http://localhost:3000/bookauthors/${props.bookId}`)
      .then((response) => response.json())
      .then((json) => setData(json.authors));
  }, []);
  return data.map((author, i) => <span key={i}>{author.name}</span>);
}

function BookDetail() {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.books);
      });
  }, []);

  return (
    <div className="book-detail">
      {data.map((book, i) => (
        <>
          <img
            className="book-detail__image"
            src="https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
          />
          <div className="book-detail__info">
            <div className="book-detail__title">{book.name}</div>
            <div className="book-detail__authors">
              <BookAuthorList bookId={book.id} />
            </div>
            <div className="book-detail__publisher">
              <p>Publisher:</p> {book.publisher}
            </div>
            <div className="book-detail__year">
              <p>Year:</p> {book.year}
            </div>
            <div className="book-detail__pages">
              <p>Pages:</p> {book.year}
            </div>
            <div className="book-detail__isbn">
              <p>ISBN:</p> {book.isbn}
            </div>
            <div className="book-detail__editionId">
              {" "}
              <p>Edition:</p> {book.edition}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default BookDetail;
