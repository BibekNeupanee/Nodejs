import React from "react";
import { useParams } from "react-router-dom";
import "./BookDetail.scss";

function BookDetail() {
  const book = {
    id: 1,
    image:
      "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png",
    title: "Node.js",
    authors: ["Bibek Neupane", "Subodh Khanal"],
    publisher: "Packt",
    year: "2018",
    pages: "200",
    isbn: "1234567890",
    editionId: "123134564"

  };

  const { id } = useParams();
  return (
    <div className="book-detail">
      <img className="book-detail__image" src={book.image} />
      <div className="book-detail__info">
        <div className="book-detail__title">{book.title}</div>
        <div className="book-detail__authors">
          {book.authors.map((author,i) => (
            <span className="book-detail__author" key={i}>{author}</span>
          ))}
        </div>
        <div className="book-detail__publisher"><p>Publisher:</p> {book.publisher}</div>
        <div className="book-detail__year"><p>Year:</p> {book.year}</div>
        <div className="book-detail__pages"><p>Pages:</p> {book.year}</div>
        <div className="book-detail__isbn"><p>ISBN:</p> {book.isbn}</div>
        <div className="book-detail__editionId"> <p>Edition Id:</p> {book.editionId}</div>
      </div>
    </div>
  );
}

export default BookDetail;
