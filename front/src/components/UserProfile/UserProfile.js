import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

function UserProfile() {
  const [user, setUser] = useLocalStorage("user", {});
  let [_, month, date, year] = new Date(
    JSON.parse(localStorage.getItem("user")).dob
  )
    .toString()
    .split(" ");

  return (
    <main class="main-main">
      <section class="profile">
        <header>
          <div class="title">
            Welcome, <span>{user.username}</span>
          </div>
        </header>
        <main>
          <div class="dob">Date of Birth: {`${month}-${date}, ${year}`}</div>
          <div class="dob">Email: {user.email}</div>
          <div class="dob">Full Name: {user.name}</div>
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
          {/* <!-- <a href="">All Categories <i class="fa-solid fa-chevron-right"></i></a> --> */}
        </header>
        <main>
          <div class="book">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg"
              alt=""
            />
            <div class="info">
              <a href="#" class="title">
                Think Like a Monk: Train Your Mind for Peace and Purpose
                Everyday
              </a>
              <a href="#" class="author">
                Jay Shetty
              </a>
              <div class="price">$29</div>
            </div>
            <div class="controls">
              <span>
                added <span>2 days ago</span>
              </span>
            </div>
          </div>
          <div class="book">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg"
              alt=""
            />
            <div class="info">
              <a href="#" class="title">
                Think Like a Monk: Train Your Mind for Peace and Purpose
                Everyday
              </a>
              <a href="#" class="author">
                Jay Shetty
              </a>
              <div class="price">$29</div>
            </div>
            <div class="controls">
              <span>
                added <span>2 days ago</span>
              </span>
            </div>
          </div>
          <div class="book">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg"
              alt=""
            />
            <div class="info">
              <a href="#" class="title">
                Think Like a Monk: Train Your Mind for Peace and Purpose
                Everyday
              </a>
              <a href="#" class="author">
                Jay Shetty
              </a>
              <div class="price">$29</div>
            </div>
            <div class="controls">
              <span>
                added <span>2 days ago</span>
              </span>
            </div>
          </div>
          <div class="book">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg"
              alt=""
            />
            <div class="info">
              <a href="#" class="title">
                Think Like a Monk: Train Your Mind for Peace and Purpose
                Everyday
              </a>
              <a href="#" class="author">
                Jay Shetty
              </a>
              <div class="price">$29</div>
            </div>
            <div class="controls">
              <span>
                added <span>2 days ago</span>
              </span>
            </div>
          </div>
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
          <div class="book">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg"
              alt=""
            />
            <div class="info">
              <a href="#" class="title">
                Think Like a Monk: Train Your Mind for Peace and Purpose
                Everyday
              </a>
              <a href="#" class="author">
                Jay Shetty
              </a>
              <div class="price">$29</div>
            </div>
            <div class="controls">
              <a href="#" class="add-to-cart">
                Remove
              </a>
            </div>
          </div>
          <div class="book">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg"
              alt=""
            />
            <div class="info">
              <a href="#" class="title">
                Think Like a Monk: Train Your Mind for Peace and Purpose
                Everyday
              </a>
              <a href="#" class="author">
                Jay Shetty
              </a>
              <div class="price">$29</div>
            </div>
            <div class="controls">
              <a href="#" class="add-to-cart">
                Remove
              </a>
            </div>
          </div>
          <div class="book">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg"
              alt=""
            />
            <div class="info">
              <a href="#" class="title">
                Think Like a Monk: Train Your Mind for Peace and Purpose
                Everyday
              </a>
              <a href="#" class="author">
                Jay Shetty
              </a>
              <div class="price">$29</div>
            </div>
            <div class="controls">
              <a href="#" class="add-to-cart">
                Remove
              </a>
            </div>
          </div>
          <div class="book">
            <img
              src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg"
              alt=""
            />
            <div class="info">
              <a href="#" class="title">
                Think Like a Monk: Train Your Mind for Peace and Purpose
                Everyday
              </a>
              <a href="#" class="author">
                Jay Shetty
              </a>
              <div class="price">$29</div>
            </div>
            <div class="controls">
              <a href="#" class="add-to-cart">
                Remove
              </a>
            </div>
          </div>
        </main>
      </section>
    </main>
  );
}

export default UserProfile;
