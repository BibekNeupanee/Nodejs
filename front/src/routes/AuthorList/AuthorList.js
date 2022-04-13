import React from "react";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

function AuthorList() {
  const authors = useFetch(`http://localhost:3000/authors`)?.authors || [];

  return (
    <>
      <Header />
      <main class="main-main">
        <section class="authors">
          <header>
            <div class="title">Authors</div>
          </header>

          <main>
            {authors.map((author, i) => (
              <>
                <Link to={"/author/" + author.id} class="author">
                  <img
                    src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/140x140/img1.jpg"
                    alt=""
                  />
                  <div class="name">{author.name}</div>
                </Link>
              </>
            ))}
          </main>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AuthorList;
