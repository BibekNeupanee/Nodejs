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
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfbirth, setDateOfBirth] = useState("");

  const [validName, setValidName] = useState([]);
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
    if (nameValidation(name)) {
      if (EmailValidation(email)) {
        if (passwordValidation(password, confirmPassword)) {
          if (dateOfbirth !== "") {
            console.log(dateOfbirth);
            await fetch("http://localhost:3000/users", {
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
          } else setValidDob([true]);
        } else setValidPassword([true]);
      } else setValidEmail([true]);
    } else setValidName([true]);
  };

  const UserData = {
    name,
    email,
    username,
    password: confirmPassword,
    dob: dateOfbirth,
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
          onInput={(e) => setName(e.target.value)}
        />
        {validName.map((isValid, i) => {
          if (isValid) {
            return (
              <span className="not-validName" key={i}>
                Name Not valid!
              </span>
            );
          }
        })}
      </div>
      <div className="email">
        <label>Enter Email Address:</label>
        <input
          type="text"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
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
          value={username}
          onInput={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="password">
        <label>Enter Password:</label>
        <input
          type="password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onInput={(e) => setConfirmPassword(e.target.value)}
        />
        <p>
          <b>Psssword Criteria</b>
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
          value={dateOfbirth}
          onInput={(e) => setDateOfBirth(e.target.value)}
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
