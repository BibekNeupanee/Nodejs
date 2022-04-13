import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import BookAuthorList from "../BookAuthorList/BookAuthorList";

function AuthorDetail() {
  const { id } = useParams();
  const authors =
    useFetch(`http://localhost:3000/authors/author/${id}`)?.authors || [];
  // console.log(authors[0].authorName);

  return (
    <main class="main-main">
      <>
        <section class="author">
          <header>
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
                  <a
                    // onClick={() => handlePdf(book.id, user.id)}
                    href={book.pdf}
                    class="add-to-cart"
                    target="_blank"
                  >
                    Downlad Pdf
                  </a>
                </div>
              </div>
            ))}
          </main>
        </section>
      </>
    </main>
  );
}

export default AuthorDetail;
