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

  const handleBtnCheckout = async () => {
    state.map((s) => {
      // console.log(s.id);
    });
    console.log(state[0].id);
    // return;
    const data = await fetch("http://localhost:3000/cart/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: state.map((e) => e.id).join(","),
        userId: user.id,
      }),
    });
  };

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
    <section class="cart">
      <header>
        <div class="title">Cart</div>
      </header>
      <header className="total">
        <div>
          <span>Total </span>
          <div className="amount">{state.reduce((a, c) => a + c.price, 0)}</div>
        </div>
        <button onClick={() => handleBtnCheckout()}>Checkout</button>
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
            <div class="controls">
              <Link to={"/cart"} onClick={() => handleBtnRemove(book.id)}>
                Remove
              </Link>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default CartItem;
