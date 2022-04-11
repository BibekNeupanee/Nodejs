import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

import "./UserLogin.scss";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");

  const handleLoginBtn = async () => {
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
    }
  };

  return (
    <form className="login">
      <label className="user_login">User Login</label>
      <label className="email">Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="eg@abc.com"
      />
      <label className="password">Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <Link
        className="btn-login"
        onClick={(e) => {
          handleLoginBtn();
          e.preventDefault();
          // window.location.href = "/";
        }}
        to={"/"}
      >
        Login
      </Link>
      <Link to={"/register"}>Create an account</Link>
      <a href="/login">Forget Password?</a>
    </form>
  );
}

export default UserLogin;
