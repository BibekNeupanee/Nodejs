import React from "react";
import Book from "../../components/Book/Book";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.scss";
function Home() {
  return (
    <div>
      <Header />
      <Book />
      <Footer />
    </div>
  );
}

export default Home;
