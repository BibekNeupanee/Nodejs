import React, { useEffect, useState } from "react";
import "./BookList.scss";

function BookAuthorList(props) {
  const [data, setData] = useState([]);
  useEffect((_) => {
    fetch(`http://localhost:3000/bookauthors/${props.bookId}`)
      .then((response) => response.json())
      .then((json) => setData(json.authors));
  }, []);
  return data.map((author, i) => <span key={i}>{author.name}</span>);
}

async function deleteBtn(id) {
  fetch(`http://localhost:3000/delete-book/${id}`, { method: "DELETE" });
  alert("Delete Sucessful")
  window.location.reload();
  // console.log(id);
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
          onClick={(_) => props.onShowPopUp()}
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
              <div className="price">RS. {book.price}</div>
            </div>
            <div className="right">
              <button className="btn" title="Edit">
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
