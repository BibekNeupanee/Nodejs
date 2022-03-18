import React, { useState } from "react";
import "./UserRegister.scss";
import { Link } from "react-router-dom";
// import useFetch from "../../../../admin/src/hooks/useFetch";

function nameValidation(name) {
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!regName.test(name)) {
    return false;
  } else {
    return true;
  }
}

function emailValidation(email) {
  // const data = useFetch(`http://localhost:3000/users`)
  //   ?.authors || [props];

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
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

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfbirth, setDateOfBirth] = useState("");

  const [validName, setValidName] = useState([]);
  const [validEmail, setValidEmail] = useState([]);
  const [validPassword, setValidPassword] = useState([]);

  const InsertUserData = async function ({ name, email, password, dob }) {
    if (nameValidation(name)) {
      if (emailValidation(email)) {
        if (passwordValidation(password, confirmPassword)) {
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
        } else setValidPassword([true]);
      } else setValidEmail([true]);
    } else setValidName([true]);
  };

  const UserData = {
    name,
    email,
    password,
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
      <div className="password">
        <p>
          Password should be 8 to 15 characters which contain at least one
          lowercase letter, one uppercase letter, one numeric digit, and one
          special character.
        </p>
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
