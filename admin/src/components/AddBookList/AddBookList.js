import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./AddBookList.scss";

function AddBookList(props) {
  const publishers =
    useFetch(`http://localhost:3000/publishers`)?.publishers || [];

  const bookTypes = useFetch(`http://localhost:3000/booktypes`)?.types || [];

  const data = useFetch(`http://localhost:3000/authors`)?.authors || [];

  const [formData, setFormData] = useState({
    name: props?.book?.name || "",
    year: props?.book?.year || "",
    isbn: props?.book?.isbn || "",
    edition: props?.book?.edition || "",
    selectedAuthor: "",
    bookAuthors: [],
    selectedPublisher: [],
    selectedBookType: [],
    price: props?.book?.price || "",
    pages: props?.book?.pages || "",
  });

  //FOR ADD BUTTON
  const handleBookAdd = async (e) => {
    e.preventDefault();

    if (!props) {
      const data = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          year: formData.year,
          pages: formData.pages,
          isbn: formData.isbn,
          edition: formData.edition,
          authors: formData.bookAuthors.map((e) => e.id).join(","),
          publisher: formData.selectedPublisher.id,
          bookType: formData.selectedBookType.id,
          price: formData.price,
        }),
      });

      const response = await data.json();
      if (response.errorMessage) {
        alert(response.errorMessage);
      } else if (response.successMessage) {
        alert(response.successMessage);
        window.location.reload();
      }
    } else {
      const postBody = { ...formData };
      Object.entries(postBody).forEach(([key, value]) => {
        if (props.book[key] === value || value.length === 0) {
          delete postBody[key];
        }
      });
      console.log(postBody, props.book.id);
      const data = await fetch("http://localhost:3000/books", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...postBody, id: props.book.id }),
      });

      const response = await data.json();
      if (response.errorMessage) {
        alert(response.errorMessage);
      } else if (response.successMessage) {
        alert(response.successMessage);
        window.location.reload();
      }
    }
  };

  //FOR PUBLISHER
  const publisherOnSelectChange = function (e) {
    if (e.target.value === "") {
      setFormData({ ...formData, selectedPublisher: "" });
      return;
    }
    setFormData({
      ...formData,
      selectedPublisher: e.target.selectedOptions[0].dataset.id,
    });
  };

  //For BookType
  const bookTypeOnSelectChange = function (e) {
    if (e.target.value === "") {
      setFormData({ ...formData, selectedBookType: "" });
      return;
    }

    setFormData({
      ...formData,
      selectedBookType: e.target.selectedOptions[0].dataset.id,
    });
  };

  //FOR AUTHOR
  const authorOnSelectChange = function (e) {
    if (e.target.value === "") {
      setFormData({ ...formData, selectedAuthor: "" });
      return;
    }

    setFormData({
      ...formData,
      selectedAuthor: {
        id: e.target.selectedOptions[0].dataset.id,
        name: e.target.selectedOptions[0].dataset.name,
      },
    });
  };

  //FOR SELECTING THE BOOK AUTHORS
  const handle = () => {
    if (
      formData.bookAuthors.find((e) => e.name === formData.selectedAuthor.name)
    ) {
      return;
    }

    setFormData({
      ...formData,
      selectedAuthor: [...formData.bookAuthors, formData.selectedAuthor],
    });
  };

  return (
    <form className="add-book">
      <h2 className="add-book__header"> Add Book</h2>
      <div className="add-book__book-name">
        <label>Book Name: </label>
        <input
          type="text"
          className="txt"
          value={formData.name}
          onInput={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="add-book__year">
        <label>Year: </label>
        <input
          type="number"
          value={formData.year}
          onInput={(e) => setFormData({ ...formData, year: e.target.value })}
        />
      </div>
      <div className="add-book__pages">
        <label>Pages: </label>
        <input
          type="number"
          value={formData.pages}
          onInput={(e) => setFormData({ ...formData, pages: e.target.value })}
        />
      </div>
      <div className="add-book__isbn">
        <label>ISBN: </label>
        <input
          type="text"
          value={formData.isbn}
          onInput={(e) => setFormData({ ...formData, isbn: e.target.value })}
        />
      </div>
      <div className="add-book__edition">
        <label>Edition: </label>
        <input
          type="number"
          value={formData.edition}
          onInput={(e) => setFormData({ ...formData, edition: e.target.value })}
        />
      </div>
      {!props?.book ? (
        <div className="add-book__author">
          <label> Authors: </label>
          <select name="author-list" onChange={authorOnSelectChange}>
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
            {formData.bookAuthors.map((author, i) => (
              <label key={i}>{author.name} </label>
            ))}
          </div>
        </div>
      ) : null}

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
      <div className="add-book__book-types">
        <label>Book Type: </label>
        <select name="book-type-list" onChange={bookTypeOnSelectChange}>
          <option></option>
          {bookTypes.map((bookType, i) => (
            <option key={i} data-name={bookType.name} data-id={bookType.id}>
              {bookType.name}
            </option>
          ))}
        </select>
      </div>
      <div className="add-book__book-price">
        <label>Book Price: </label>
        <input
          type="number"
          className="txt"
          value={formData.price}
          onInput={(e) => setFormData({ ...formData, price: e.target.value })}
        />
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

export default AddBookList;
