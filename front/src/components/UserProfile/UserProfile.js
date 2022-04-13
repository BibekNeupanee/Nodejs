import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BookAuthorList from "../BookAuthorList/BookAuthorList";

function UserProfile() {
  const [user, setUser] = useLocalStorage("user", {});
  let [_, month, date, year] = new Date(
    JSON.parse(localStorage.getItem("user")).dob
  )
    .toString()
    .split(" ");

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
  const cartItems =
    useFetch(`http://localhost:3000/cart/${user.id}`)?.item || [];

  const userBooks =
    useFetch(`http://localhost:3000/users/books/${user.id}`)?.books || [];

  return (
    <main class="main-main">
      <section class="profile">
        <header>
          <div class="title">
            Welcome, <span>{user.username}</span>
          </div>
        </header>
        <main>
          <div class="name">Full Name: {user.name}</div>
          <div class="email">Email: {user.email}</div>
          <div class="dob">Date of Birth: {`${month}-${date}, ${year}`}</div>
        </main>
      </section>

      <section class="password">
        <header>
          <div class="title">Change your password</div>
        </header>
        <main>
          <form method="post">
            <div class="group">
              <label for="email">Old Password</label>
              <input type="password" name="old-password" id="old-password" />
            </div>
            <div class="group">
              <label for="password">New Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div class="group">
              <label for="password">Retype New Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div class="group">
              <button type="submit">Change Password</button>
            </div>
          </form>
        </main>
      </section>

      <section class="user-books">
        <header>
          <div class="title">Your Books</div>
        </header>
        <main>
          {userBooks.map((book, i) => (
            <div class="book">
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
                <a
                  // onClick={() => handlePdf(book.id, user.id)}
                  href={book.pdf}
                  class="add-to-cart"
                  target="_blank"
                >
                  Downlad Pdf
                </a>
              </div>
            </div>
          ))}
        </main>
      </section>

      <section class="cart">
        <header>
          <div class="title">Books in Your Cart</div>
          {/* <!-- <button>Clear All</button> --> */}
          <a href="">
            Go to Cart <i class="fa-solid fa-chevron-right"></i>
          </a>
        </header>
        <main>
          {[...cartItems].slice(0, 4).map((book, i) => (
            <div class="book">
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
                <Link
                  to={"/profile/" + user.username}
                  onClick={() => handleBtnRemove(book.id)}
                >
                  Remove
                </Link>
              </div>
            </div>
          ))}
        </main>
      </section>
    </main>
  );
}

export default UserProfile;
