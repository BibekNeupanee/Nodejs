import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import SimilarBooks from "../SimilarBooks/SimilarBooks";
// import "./BookDetail.scss";

function Publisher(props) {
  const publisher =
    useFetch(`http://localhost:3000/publishers/${props.pId}`)?.publisher || [];

  return publisher.map((publishers, i) => (
    <span key={i}>{publishers.name}</span>
  ));
}

function BookDetail() {
  const { id } = useParams();

  const books = useFetch(`http://localhost:3000/books/${id}`)?.books || [];

  const [user, setUser] = useLocalStorage("user", {});

  const handleCartButton = async (id, userId) => {
    const data = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        userId,
      }),
    });
    const response = await data.json();
    if (response.message) {
      alert(response.message);
      window.location.reload();
    }
  };
  return (
    <>
      <section class="book-detail">
        <header>
          <div class="title">Shop Single</div>
        </header>
        {books.map((book, i) => (
          <main>
            <img
              src={
                book.image ||
                "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
              }
              alt=""
            />
            <div class="info">
              <div class="top">
                <div class="title">{book.name}</div>
                <div class="authors">
                  <span>By</span>
                  <div class="list">
                    <div class="author">
                      <BookAuthorList bookId={book.id} />
                    </div>
                  </div>
                </div>
                <div className="publisher">
                  <Publisher pId={book.publisherId} />
                </div>
                
                <div class="price">Rs. {book.price}</div>
                <div class="description">{book.description}</div>
              </div>
              {localStorage.getItem("token") ? (
                <a
                  onClick={() => handleCartButton(book.id, user.id)}
                  href="#"
                  class="add-to-cart"
                >
                  Add to cart
                </a>
              ) : (
                <Link class="add-to-cart" to={"/login"}>
                  Add To Cart
                </Link>
              )}
            </div>
          </main>
        ))}
      </section>
      <SimilarBooks bId={id} />
    </>
  );
}

export default BookDetail;
