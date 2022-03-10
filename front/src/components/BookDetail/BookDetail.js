import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import "./BookDetail.scss";

function Publisher(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch(`http://localhost:3000/publishers/${props.pId}`)
      .then((response) => response.json())
      .then((json) => setData(json.publisher));
  }, []);
  return data.map((publishers, i) => <span key={i}>{publishers.name}</span>);
}

function BookDetail() {
  const { id } = useParams();

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
            <div className="book-detail__type">
              <p>Genre:</p> <BookType btId={book.bookTypeId} />
            </div>
            <div className="book-detail__authors">
              Authors: <BookAuthorList bookId={book.id} />
            </div>
            <div className="book-detail__publisher">
              <p>Publisher: </p>
              <Publisher pId={book.publisherId} />
            </div>
            <div className="book-detail__year">
              <p>Year:</p> {book.year}
            </div>
            <div className="book-detail__pages">
              <p>Pages:</p> {book.pages}
            </div>
            <div className="book-detail__isbn">
              <p>ISBN:</p> {book.isbn}
            </div>
            <div className="book-detail__editionId">
              <p>Edition:</p> {book.edition}
            </div>
            <div className="book-detail__price">
              <p>Rs.</p> {book.price}
            </div>
            <div className="book-detail__btn">
              <button className="btn_buy">Buy</button>
              <button className="btn_cart">Add To Cart</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default BookDetail;
