import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";

function SearchBooks() {
  return (
    <>
      <Header />
      <main className="main-main">
        <Search />
      </main>
      <Footer />
    </>
  );
}

export default SearchBooks;
