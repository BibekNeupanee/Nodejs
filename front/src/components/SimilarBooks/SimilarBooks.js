import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
// import "./SimilarBooks.scss";

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
      <section class="related">
        <header>
          <div class="title">Related Books</div>
          {/* <a href="">All Categories <i class="fa-solid fa-chevron-right"></i></a> */}
        </header>
        <main>
          {[...similarBooks].slice(0, 4).map((book, i) => (
            <div class="book">
              <img
                src={
                  book.image ||
                  "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
                }
                alt={book.name}
              />
              <div class="info">
                <a href="#" class="title">
                  {book.name}
                </a>
                <a href="#" class="author">
                  <BookAuthorList bookId={book.id} />
                </a>
                <div class="price">Rs. {book.price}</div>
              </div>
              <div class="controls">
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
                <a href="#">
                  <i class="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
          ))}
        </main>
      </section>
    </>
  );
}

export default SimilarBooks;
