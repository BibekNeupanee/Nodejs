import React from "react";
import { Link } from "react-router-dom";
import "./Settings.scss";
function Settings() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="settings">
      {localStorage.getItem("token") ? (
        <button onClick={() => handleLogout()}>logout</button>
      ) : (
        <span>efgh</span>
      )}
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

export default Settings;
