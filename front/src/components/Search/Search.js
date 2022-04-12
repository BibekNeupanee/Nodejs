import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
import BookType from "../BookType/BookType";
import "./Search.scss";

function Search() {
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
  const { keyword } = useParams();

  const data =
    useFetch("http://localhost:3000/search/" + keyword)?.search || [];

  return (
    <section class="bestselling">
      <header>
        <div class="title">
          Search ({Object.keys(data).length}) "{keyword}"
        </div>
      </header>
      <main>
        {data.map((book, i) => (
          <div class="book">
            <img
              src={
                book.image ||
                "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
              }
              alt={book.name}
            />
            <div class="info">
              <Link to={"/book-detail/" + book.id} class="title">
                {book.name}
              </Link>
              <a href="#" class="author">
                <BookAuthorList bookId={book.id} />
              </a>
              <div class="price">Rs. {book.price}</div>
            </div>
            {/* <div className="category_type">
        <BookType btId={book.bookTypeId} />
      </div> */}
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
  );
}

export default Search;
