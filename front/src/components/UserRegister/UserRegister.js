import React, { useState } from "react";
import "./UserRegister.scss";
import { Link } from "react-router-dom";

function nameValidation(name) {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!regName.test(name)) {
    return false;
  } else {
    return true;
  }
}

function passwordValidation(password, confirmPassword) {
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (password === confirmPassword) {
    if (password.match(decimal)) {
      return true;
    } else {
      return false;
    }
  } else return false;
}

function EmailValidation(inputEmail) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputEmail.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("bibek@gmail.com");
  const [username, setUsername] = useState("bibek_neupane");
  const [password, setPassword] = useState("bibek");
  const [confirmPassword, setConfirmPassword] = useState("bibek");
  const [dateOfbirth, setDateOfBirth] = useState("2022-04-01");

  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState([]);
  const [validPassword, setValidPassword] = useState([]);
  const [validDob, setValidDob] = useState([]);

  const InsertUserData = async function ({
    name,
    email,
    username,
    password,
    dob,
  }) {
    const data = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        username,
        password,
        dob,
      }),
    });
    const response = await data.json();
    if (response.errorMessage) {
      alert(response.errorMessage);
    }
  };

  const UserData = {
    name,
    email,
    username,
    password: confirmPassword,
    dob: dateOfbirth,
  };

  const handleNamChange = (e) => {
    setName(e.target.value);
    setValidName(nameValidation(e.target.value));
    console.log("hello");
  };

  return (
    <form className="register">
      <h1> Register</h1>
      <div className="name">
        <label>Enter Full Name:</label>
        <input
          type="text"
          name="fullname"
          value={name}
          onChange={handleNamChange}
        />
        {!validName ? (
          <span className="not-validName">Name Not valid!</span>
        ) : null}
      </div>
      <div className="email">
        <label>Enter Email Address:</label>
        <input
          type="text"
          onInput={(e) => setEmail(e.target.value)}
          value={email}
        />
        {validEmail.map((isValid, i) => {
          if (isValid) {
            return (
              <span className="not-validName" key={i}>
                Email Not valid!
              </span>
            );
          }
        })}
      </div>
      <div className="username">
        <label>Enter Username:</label>{" "}
        <input
          type="text"
          onInput={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div className="password">
        <label>Enter Password:</label>
        <input
          type="password"
          onInput={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          onInput={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <p>
          <b>Passsword Criteria</b>
          <br /> - Should be 8 to 15 characters
          <br />
          - Should contain at least one lowercase letter
          <br />
          - Should contain at least one uppercase letter
          <br />
          - Should contain at least one numeric digit
          <br />- Should contain at least one special character.
        </p>
        {validPassword.map((isValid, i) => {
          if (isValid) {
            return (
              <span className="not-validName" key={i}>
                Password must match above criteria.
              </span>
            );
          }
        })}
      </div>
      <div className="dob">
        <label htmlFor="birthday">Enter Birthday:</label>
        <input
          type="date"
          onInput={(e) => setDateOfBirth(e.target.value)}
          value={dateOfbirth}
        />
        {validDob.map((isValid, i) => {
          if (isValid) {
            return (
              <span className="not-validName" key={i}>
                Please enter Birthday.
              </span>
            );
          }
        })}
      </div>
      {/* <Link to={"/login"} className="btn-signup"> */}
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
