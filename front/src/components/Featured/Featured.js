import React from "react";
import useFetch from "../../hooks/useFetch";
import BookAuthorList from "../BookAuthorList/BookAuthorList";

function Featured() {
  const books = useFetch("http://localhost:3000/books")?.books || [];
  return (
    <section class="featured">
      <header>
        <div class="title">Featured Books</div>
        <a href="">
          All Categories <i class="fa-solid fa-chevron-right"></i>
        </a>
      </header>
      <main>
        {[...books].slice(0, 20).map((book, i) => (
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
              <a href="#" class="add-to-cart">
                Add to cart
              </a>
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

export default Featured;
