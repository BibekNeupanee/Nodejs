import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Settings.scss";

function Settings() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const [user, setUser] = useLocalStorage("user", {});

  if (localStorage.getItem("token")) {
    return (
      <div className="settings">
        <span>Welcome, {user?.name} </span>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="settings">
        <Link to={"/login"} className="settings__link">
          Login
        </Link>
        <Link to={"/register"} className="settings__link">
          Register
        </Link>
        <Link to={"/cart"} className="settings__link">
          My Cart
        </Link>
      </div>
    );
  }
}

export default Settings;
