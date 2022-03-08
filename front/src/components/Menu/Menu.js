import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import "./Menu.scss";
function Menu() {
  return (
    <div className="menu">
      <SearchBox />
      <Link className="menu__link" to={"/"}>
        Home
      </Link>
      <Link className="menu__link" to={"/about"}>
        About Us
      </Link>
      <Link to={"/login"} className="menu__link">
        Login
      </Link>
      <Link to={"/register"} className="menu__link">
        Register
      </Link>
    </div>
  );
}

export default Menu;
