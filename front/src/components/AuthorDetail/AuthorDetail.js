import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BookAuthorList from "../BookAuthorList/BookAuthorList";

function AuthorDetail() {
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
  const { id } = useParams();
  const authors =
    useFetch(`http://localhost:3000/authors/author/${id}`)?.authors || [];
  // console.log(authors[0].authorName);

  return (
    <main class="main-main">
      <section class="author-detail">
        <header>
          {authors[0] ? (
            <img
              src={
                authors[0].authorImage ||
                "https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/140x140/img1.jpg"
              }
              alt=""
            />
          ) : null}
          <div class="title">
            <span>{authors[0] ? authors[0].authorName : null}</span>
          </div>
        </header>
        <main>
          <div class="name">Total Books: {Object.keys(authors).length}</div>
        </main>
      </section>

      <section class="user-books">
        <header>
          <div class="title">
            <span>{authors[0] ? authors[0].authorName : null}'s</span>
            &nbsp;Books
          </div>
        </header>
        <main>
          {authors.map((book) => (
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
    </main>
  );
}

export default AuthorDetail;
