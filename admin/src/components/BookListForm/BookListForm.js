import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./BookListForm.scss";

function BookListForm() {
  const publishers =
    useFetch(`http://localhost:3000/publishers`)?.publishers || [];
  // const addedAuthors = {};
  const data = useFetch(`http://localhost:3000/authors`)?.authors || [];

  const [selectedPublisher, setSelectedPublisher] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [bookAuthors, setBookAuthors] = useState([]);
  const [bookName, setBookName] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [isbn, setIsbn] = useState("");
  const [edition, setEdition] = useState("");

  //FOR PUBLISHER
  const publisherOnSelectChange = function (e) {
    if (e.target.value === "") {
      setSelectedPublisher("");
      return;
    }

    setSelectedPublisher((oldValue) => {
      const id = e.target.selectedOptions[0].dataset.id;
      const name = e.target.selectedOptions[0].dataset.name;
      return { id, name };
    });
  };

  //FOR AUTHOR
  const onSelectChange = function (e) {
    if (e.target.value === "") {
      setSelectedAuthor("");
      return;
    }

    setSelectedAuthor((oldValue) => {
      const id = e.target.selectedOptions[0].dataset.id;
      const name = e.target.selectedOptions[0].dataset.name;
      return { id, name };
    });
  };

  //FOR SELECTING THE BOOK AUTHORS
  const handle = () => {
    if (bookAuthors.find((e) => e.name === selectedAuthor.name)) return;
    setBookAuthors([...bookAuthors, selectedAuthor]);
  };

  //FOR ADD BUTTON
  const handleBookAdd = (e) => {
    console.log(selectedPublisher.id);

    e.preventDefault();
    console.log(bookAuthors.map((e) => e.id).join(","));
  };

  return (
    <form className="add-book">
      <h2 className="add-book__header"> Add Book</h2>
      <div className="add-book__book-name">
        <label>Book Name: </label>
        <input
          type="text"
          className="txt"
          value={bookName}
          onInput={(e) => setBookName(e.target.value)}
        />
      </div>
      <div className="add-book__year">
        <label>Year: </label>
        <input
          type="number"
          value={year}
          onInput={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="add-book__pages">
        <label>Pages: </label>
        <input
          type="number"
          value={pages}
          onInput={(e) => setPages(e.target.value)}
        />
      </div>
      <div className="add-book__isbn">
        <label>ISBN: </label>
        <input
          type="text"
          value={isbn}
          onInput={(e) => setIsbn(e.target.value)}
        />
      </div>
      <div className="add-book__edition">
        <label>Edition: </label>
        <input
          type="number"
          value={edition}
          onInput={(e) => setEdition(e.target.value)}
        />
      </div>
      <div className="add-book__author">
        <label> Authors: </label>
        <select name="author-list" onChange={onSelectChange}>
          <option></option>
          {data.map((author, i) => (
            <option key={i} data-name={author.name} data-id={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={handle}>
          Add Author
        </button>
        <div className="add-book__selected-authors">
          {bookAuthors.map((author, i) => (
            <option key={i}>{author.name} </option>
          ))}
        </div>
      </div>
      <div className="add-book__publisher">
        <label>Publisher: </label>
        <select name="publisher-list" onChange={publisherOnSelectChange}>
          <option></option>
          {publishers.map((publisher, i) => (
            <option key={i} data-name={publisher.name} data-id={publisher.id}>
              {publisher.name}
            </option>
          ))}
        </select>
      </div>
      <div className="add-book__choose-book">
        <label>Book PDF: </label>
        <input type="file" accept=".pdf" />
      </div>
      <div className="add-book__book-cover">
        <label>Book Cover: </label>
        <input type="file" accept="image/*" />
      </div>
      <button
        className="add-book__btn-add"
        onClick={handleBookAdd}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default BookListForm;
