import React from "react";
import BookDetail from "../../components/BookDetail/BookDetail";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function BookDetails() {
  return (
    <>
      <Header />

      <main className="main-main">
        <BookDetail />
      </main>
      <Footer />
    </>
  );
}

export default BookDetails;
