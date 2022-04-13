import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Cart() {
  return (
    <>
      <Header />
      <main className="main-main">
        <CartItem />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
