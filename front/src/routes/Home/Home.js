import React from "react";
import BookList from "../../components/BookList/BookList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.scss";
function Home() {
  return (
    <div>
      <Header />
      <BookList />
      <Footer />
    </div>
  );
}

export default Home;
