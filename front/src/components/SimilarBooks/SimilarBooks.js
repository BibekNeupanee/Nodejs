import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import "./SimilarBooks.scss";

function SimilarBooks(props) {
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

  const similarBooks =
    useFetch(`http://localhost:3000/books/similar/${props.bId}`)?.books || [];
  return (
    <>
      <h1>Similar Books</h1>
      <div className="similar-books">
        {[...similarBooks].slice(0, 4).map((book, i) => (
          <div className="similar-books__info" key={i}>
            <img
              src={
                book.image ||
                "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
              }
              alt={book.name}
            />
            <div className="similar-books__autors">
              <BookAuthorList bookId={book.id} />
            </div>
            <div className="similar-bookstype">
              <BookType btId={book.bookTypeId} />
            </div>
            <div className="similar-booksprice">
              <b>Rs. {book.price}</b>
            </div>
            <div className="similar-booksbtn">
              <button className="btn" id="buy">
                Buy
              </button>
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
          </div>
        ))}
      </div>
    </>
  );
}

export default SimilarBooks;
