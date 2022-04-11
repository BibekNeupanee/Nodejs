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
        <Link to={"/profile/" + user?.username} className="settings__link">
          {user?.name}
        </Link>
        <Link
          to={"/"}
          onClick={() => handleLogout()}
          className="settings__link"
        >
          Logout
        </Link>
        <Link to={"/cart"} className="settings__link">
          My Cart
        </Link>
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
        {localStorage.getItem("token") ? (
          <Link to={"/cart"} className="settings__link">
            My Cart
          </Link>
        ) : (
          <Link to={"/login"} className="settings__link">
            My Cart
          </Link>
        )}
      </div>
    );
  }
}

export default Settings;
