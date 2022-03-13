import React from "react";
import "./UserRegister.scss";
import { Link } from "react-router-dom";

function UserRegister() {
  return (
    <form className="register">
      <div className="name">
        <label>Enter Full Name:</label>
        <input type="text" />
      </div>
      <div className="email">
        <label>Enter Email Address:</label>
        <input type="text" />
      </div>
      <div className="password">
        <label>Enter Password:</label>
        <input type="password" />
      </div>
      <div className="dob">
        <label htmlFor="birthday">Enter Birthday:</label>
        <input type="date" />
      </div>
      <button type="submit" className="btn-signup">
        Sign Up
      </button>
      <Link to={"/login"} className="link-login">
        Already have Account?
      </Link>
    </form>
  );
}

export default UserRegister;
