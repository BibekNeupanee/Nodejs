import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

import "./UserLogin.scss";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");

  const navigate = useNavigate();

  const handleLoginBtn = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const response = await data.json();
    if (response.refreshToken) {
      setToken(response.refreshToken);
      setUser(response);
      navigate("/");
    }
  };

  return (
    // <form className="login">
    //   <label className="user_login">User Login</label>
    //   <label className="email">Email:</label>
    //   <input
    //     type="email"
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="eg@abc.com"
    //   />
    //   <label className="password">Password:</label>
    //   <input type="password" onChange={(e) => setPassword(e.target.value)} />
    //   <Link
    //     className="btn-login"
    //     Link
    //   >
    //     Login
    //   </Link>
    //   <Link to={"/register"}>Create an account</Link>
    //   <a href="/login">Forget Password?</a>
    // </form>
    <main class="main-main">
      <section class="login">
        <header>
          <div class="title">
            Login <br />
            <small>for best experience</small>
          </div>
        </header>
        <main>
          <form method="post">
            <div class="group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eg@abc.com"
              />
            </div>
            <div class="group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="group">
              <button
                onClick={(e) => {
                  handleLoginBtn(e);
                  // e.preventDefault();
                  // window.location.href = "/";
                }}
                type="submit"
              >
                Login
              </button>
            </div>

            <div class="group">
              <span>
                Don't have account? <Link to={"/register"}>Sign up</Link>
              </span>
            </div>
          </form>
        </main>
      </section>
    </main>
  );
}

export default UserLogin;
