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
  };

  const { id } = useParams();
  return (
    <div className="book-detail">
      <img className="book-detail__image" src={book.image} />
      <div className="book-detail__info">
        <div className="book-detail__title">{book.title}</div>
        <div class="book-detail__authors">
          {book.authors.map((author) => (
            <span className="book-detail__author">{author}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
