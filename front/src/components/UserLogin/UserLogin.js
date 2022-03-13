import React from "react";
import { Link } from "react-router-dom";
import "./UserLogin.scss";

function UserLogin() {
  return (
    <form className="login">
      <label className="user_login">User Login</label>
      <label className="email" placeholder="eg.abc.com">
        Email:
      </label>
      <input type="text"></input>
      <label className="password">Password:</label>
      <input type="password" />
      <button className="btn-login">Login</button>
      <Link to={"/register"}>Create an account</Link>
      <a href="/login">Forget Password?</a>
    </form>
  );
}

export default UserLogin;
