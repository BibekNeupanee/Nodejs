import React from "react";
import { Link } from "react-router-dom";
import "./Settings.scss";
function Settings() {
  return (
    <div className="settings">
      <Link to={"/login"} className="settings__link">
        Login
      </Link>
      <Link to={"/register"} className="settings__link">
        Register
      </Link>
      <Link to={"/cart"} className="settings__cart">
        Cart
      </Link>
    </div>
  );
}

export default Settings;
