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
    description: props?.book?.description || "",
    image: props?.book?.image || "",
  });

  //FOR ADD BUTTON
  const handleBookAdd = async (e) => {
    e.preventDefault();
    // const formValues = e.target.serialize();
    // console.log(document.querySelector('input[name="image"]').files[0].name);
    // return;
    if (!props?.book) {
      const fd = new FormData();
      fd.append("bookName", formData.name);
      fd.append("year", formData.year);
      fd.append("pages", formData.pages);
      fd.append("isbn", formData.isbn);
      fd.append("edition", formData.edition);
      fd.append("authors", formData.bookAuthors.map((e) => e.id).join(","));
      fd.append("publisher", formData.selectedPublisher);
      fd.append("bookType", formData.selectedBookType);
      fd.append("price", formData.price);
      fd.append("description", formData.description);
      fd.append(
        "image",
        document.querySelector('input[name="image"]').files[0]
      );

      const data = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {},
        body: fd,
        // JSON.stringify({
        //   bookName: formData.name,
        //   year: formData.year,
        //   pages: formData.pages,
        //   isbn: formData.isbn,
        //   edition: formData.edition,
        //   authors: formData.bookAuthors.map((e) => e.id).join(","),
        //   publisher: formData.selectedPublisher,
        //   bookType: formData.selectedBookType,
        //   price: formData.price,
        //   description: formData.description,
        //   image: document.querySelector('input[name="image"]').files?.item(0),
        // }),
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
      bookAuthors: [...formData.bookAuthors, formData.selectedAuthor],
    });
  };

  const handleImage = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  return (
    <form
      className="add-book"
      encType="multipart/form-data"
      onSubmit={handleBookAdd}
    >
      <h2 className="add-book__header"> Add Book</h2>
      <div className="form-container">
        <div className="add-book__book-name">
          <label>Book Name: </label>
          <input
            placeholder="Book Name"
            type="text"
            className="txt"
            value={formData.name}
            onInput={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="add-book__year">
          <label>Year: </label>
          <input
            placeholder="Published Year"
            type="number"
            value={formData.year}
            onInput={(e) => setFormData({ ...formData, year: e.target.value })}
          />
        </div>
        <div className="add-book__pages">
          <label>Pages: </label>
          <input
            placeholder="Book Pages"
            type="number"
            value={formData.pages}
            onInput={(e) => setFormData({ ...formData, pages: e.target.value })}
          />
        </div>
        <div className="add-book__isbn">
          <label>ISBN: </label>
          <input
            placeholder="ISBN Number"
            type="number"
            value={formData.isbn}
            onInput={(e) => setFormData({ ...formData, isbn: e.target.value })}
          />
        </div>
        <div className="add-book__edition">
          <label>Edition: </label>
          <input
            placeholder="Edition"
            type="number"
            value={formData.edition}
            onInput={(e) =>
              setFormData({ ...formData, edition: e.target.value })
            }
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
            placeholder="Book Price"
            type="number"
            className="txt"
            value={formData.price}
            onInput={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </div>
        <div className="add-book__description">
          <label htmlFor="description">Description:</label>
          <textarea
            className="add-book__description"
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Add Description"
            value={formData.description}
            onInput={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div className="add-book__choose-book">
          <label>Book PDF: </label>
          <input name="pdf" type="file" accept=".pdf" />
        </div>
        <div className="add-book__book-cover">
          <label>Book Cover: </label>
          <input
            name="image"
            onChange={handleImage}
            type="file"
            accept=".jpg,.png,.jpeg"
          />
        </div>
        <button className="add-book__btn-add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddBookList;
