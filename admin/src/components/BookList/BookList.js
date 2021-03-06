import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import AddBookList from "../AddBookList/AddBookList";
import "./BookList.scss";

function BookAuthorList(props) {
  const data =
    useFetch(`http://localhost:3000/bookauthors/${props.bookId}`)?.authors ||
    [];

  return data.map((author, i) => <span key={i}>{author.name}</span>);
}

function Publisher(props) {
  const publisher =
    useFetch(`http://localhost:3000/publishers/${props.id}`)?.publisher || [];

  return (
    <>
      {publisher.map((pub, i) => (
        <span key={i}>{pub.name}</span>
      ))}
    </>
  );
}

async function deleteBtn(id) {
  const deleteBook = await fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE",
  });

  const response = await deleteBook.json();
  if (response.successMessage) {
    alert(response.successMessage);
    window.location.reload();
  }
}

function BookList(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((json) => {
        setData(json.books);
      });
  }, []);

  return (
    <section className="books">
      <header>
        <span>All Books ({Object.keys(data).length})</span>
        <div
          className="btn"
          onClick={(_) => props.onShowPopUp(<AddBookList />)}
          id="add_books"
          title="Add New Book"
        >
          + Add new
        </div>
      </header>
      <main>
        {data.map((book, i) => (
          <div className="item" key={i}>
            <div className="left">
              <div className="name">{book.name}</div>
              <div className="authors">
                <BookAuthorList bookId={book.id} />
              </div>
              <b>
                <Publisher id={book.publisherId} />
              </b>
              <div className="price">RS. {book.price}</div>
            </div>
            <div className="right">
              <button
                className="btn"
                title="Edit"
                onClick={(_) => props.onShowPopUp(<AddBookList book={book} />)}
              >
                Edit
              </button>
              <button
                className="btn"
                title="Delete"
                onClick={(_) => deleteBtn(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default BookList;
