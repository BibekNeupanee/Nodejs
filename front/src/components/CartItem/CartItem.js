import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BookAuthorList from "../BookAuthorList/BookAuthorList";
// import "./CartItem.scss";

function CartItem() {
  const [user, setUser] = useLocalStorage("user", {});
  const [state, setState] = useState([]);

  const cartItems =
    useFetch(`http://localhost:3000/cart/${user.id}`)?.item || [];

  const handleBtnRemove = async (id) => {
    const deleteBook = await fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    });

    const response = await deleteBook.json();
    if (response.successMessage) {
      alert(response.successMessage);
      window.location.reload();
    }
  };

  const handlecheckbox = (e, id, price) => {
    if (e.target.checked) {
      setState([...state, { id, price }]);
    } else {
      setState([...state].filter((book) => book.id !== id));
    }
  };

  return (
    <section class="search">
      {/* {state.map((e, i) => (
        <li key={i}>
          <span>Price = {e.price}</span>
          <span>id={e.id}</span>
        </li>
      ))} */}
      <header>
        <div class="title">Cart</div>
      </header>
      <main>
        {cartItems.map((book, i) => (
          <div class="book">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              value="checkbox"
              onChange={(e) => handlecheckbox(e, book.id, book.price)}
            />
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
              <Link to={"/cart"} onClick={() => handleBtnRemove(book.id)}>
                Remove
              </Link>
            </div>
          </div>
        ))}
      </main>
      <footer>
        <div className="total">
          <span>Total </span>
          <span>{state.reduce((a, c) => a + c.price, 0)}</span>
        </div>
      </footer>
    </section>
  );
}

export default CartItem;
