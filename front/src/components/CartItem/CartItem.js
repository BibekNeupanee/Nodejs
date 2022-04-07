import React from "react";
import useFetch from "../../hooks/useFetch";
import "./CartItem.scss";

function CartItem() {
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
  const cartItems = useFetch("http://localhost:3000/cart")?.item || [];
  return (
    <div className="cart-books">
      {cartItems.map((item, i) => (
        <div className="cart-books__info">
          <img
            src={
              item.image ||
              "https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png"
            }
            alt=""
          />
          <div className="cart-books__name">{item.name}</div>
          <div className="cart-books__btn">
            <button onClick={() => handleBtnRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
