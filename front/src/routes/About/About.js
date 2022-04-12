import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function About() {
  return (
    <>
      <Header />
      <div className="main-main">
        <section className="about">
          <header>
            <div className="title">About us</div>
          </header>
          <main>
            <div className="description">
              As of the present moment, Nepal Mandala Book Shop is the sole
              vendor of Books Mandala and a local bookstore, based at Lakeside,
              Pokhara. Since 1991, Nepal Mandala Book Shop has existed as a tiny
              island of peace in a fast-moving world. Thriving and growing every
              year, the business that started from a post-card board selling
              postcards to tourists in the heart of Lakeside has grown to be one
              of the hidden jewels of Pokhara with floor-to-ceiling stacks of
              books and a generally inclusive vibe that makes it seem like a
              neighborhood spot for anyone and everyone. The bookshop is one of
              the largest book distributors in Nepal. The shelves store an
              endless choice of books and the catalogue is always growing. You
              can take time browsing the seemingly endless selection of rare
              coffee table books and attractive souvenir items.
            </div>
          </main>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
