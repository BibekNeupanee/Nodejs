import React, { useState } from "react";
import "./UserRegister.scss";
import { Link } from "react-router-dom";

async function InsertUserData({ name, email, password, dob }) {
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: name,
      email: email,
      password: password,
    }),
  });
}

function UserRegister() {
  const [name, nameInput] = useState("");
  const [email, emailInput] = useState("");
  const [password, passwordInput] = useState("");
  const [dateOfbirth, dateOfbirthInput] = useState("");

  const UserData = {
    name: name,
    email: email,
    password: password,
    dob: dateOfbirth,
  };

  return (
    <form className="register">
      <h1> Register</h1>
      <div className="name">
        <label>Enter Full Name:</label>
        <input
          type="text"
          value={name}
          onInput={(e) => nameInput(e.target.value)}
        />
      </div>
      <div className="email">
        <label>Enter Email Address:</label>
        <input
          type="text"
          value={email}
          onInput={(e) => emailInput(e.target.value)}
        />
      </div>
      <div className="password">
        <label>Enter Password:</label>
        <input
          type="password"
          value={password}
          onInput={(e) => passwordInput(e.target.value)}
        />
      </div>
      <div className="dob">
        <label htmlFor="birthday">Enter Birthday:</label>
        <input
          type="date"
          value={dateOfbirth}
          onInput={(e) => dateOfbirthInput(e.target.value)}
        />
      </div>
      {/* <Link to={"/register"} className="btn-signup"> */}
      <button type="button" onClick={() => InsertUserData(UserData)}>
        Sign Up
      </button>
      {/* </Link> */}
      <Link to={"/login"} className="link-login">
        Already have Account?
      </Link>
    </form>
  );
}

export default UserRegister;
