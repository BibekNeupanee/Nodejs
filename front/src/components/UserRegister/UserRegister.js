import React, { useState } from "react";
// import "./UserRegister.scss";
import { Link, useNavigate } from "react-router-dom";

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfbirth, setDateOfBirth] = useState("");

  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState([]);
  const [validPassword, setValidPassword] = useState([]);
  const [validDob, setValidDob] = useState([]);
  const navigate = useNavigate();

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
    if (response.message) {
      alert(response.message);
      navigate("/login");
    }
  };

  const UserData = {
    name,
    email,
    username,
    password: confirmPassword,
    dob: dateOfbirth,
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    // setValidName(nameValidation(e.target.value));
    console.log("hello");
  };

  return (
    <main class="main-main">
      <section class="login">
        <header>
          <div class="title">
            Sign up <br />
            <small>to get started</small>
          </div>
        </header>
        <main>
          <form method="post">
            <div class="group">
              <label for="email">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div class="group">
              <label for="username">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                onInput={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div class="group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onInput={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div class="group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onInput={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div class="group">
              <label for="confirm-password">Password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                onInput={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            <div class="group">
              <label for="dob">Date of birth:</label>
              <input
                type="date"
                name="date"
                id="date"
                onInput={(e) => setDateOfBirth(e.target.value)}
                value={dateOfbirth}
              />
            </div>
            <div class="group">
              <button
                onClick={(e) => {
                  InsertUserData(UserData);
                  e.preventDefault();
                  // window.location.href = "/";
                }}
                to={"/"}
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div class="group">
              <span>
                Already have an account? <a href="login.html">Login</a>
              </span>
            </div>
          </form>
        </main>
      </section>
    </main>
  );
}

export default UserRegister;
