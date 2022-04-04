import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import "./BookDetail.scss";

function Publisher(props) {
  const data =
    useFetch(`http://localhost:3000/publishers/${props.pId}`)?.publisher || [];

  return data.map((publishers, i) => <span key={i}>{publishers.name}</span>);
}

function BookDetail() {
  const { id } = useParams();

  const data = useFetch(`http://localhost:3000/books/${id}`)?.books || [];

  const handleCartBtn = async () => {};

  return (
    <div className="book-detail">
      {data.map((book, i) => (
        <>
          <img
            className="book-detail__image"
            src={
              book.image ||
              "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
            }
            alt=""
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
            <div className="book-detail__description">
              <p>Description: </p>
              {book.description}
            </div>
            <div className="book-detail__btn">
              <button className="btn_buy">Buy</button>
              <Link to={"/cart"}>
                <button className="btn_cart" onClick={() => handleCartBtn}>
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default BookDetail;
