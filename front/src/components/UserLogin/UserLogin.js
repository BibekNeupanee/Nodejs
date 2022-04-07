import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./UserLogin.scss";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginBtn = async () => {
    console.log("o;sdifjslfjslkdfjsdlkjfhsdlkjfhklj");
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
    if (response.accessToken) {
      localStorage.setItem("token", response.accessToken);
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
      <button className="btn-login" onClick={() => handleLoginBtn()}>
        Login
      </button>
      <Link to={"/register"}>Create an account</Link>
      <a href="/login">Forget Password?</a>
    </form>
  );
}

export default UserLogin;
