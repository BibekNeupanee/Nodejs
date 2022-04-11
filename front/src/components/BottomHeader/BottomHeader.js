import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import logo from "./../../resources/logo1.png";

function BottomHeader() {
  return (
    <div class="main-header__bottom">
      <Link to={"/"} className="logo">
        <img src={logo} alt="abc" className="image" />
        <span>Hamro Kitab</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link className="menu__link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="menu__link">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="menu__link">
              Authors
            </a>
          </li>
          <li>
            <a href="#" className="menu__link">
              Publishers
            </a>
          </li>
          <li>
            <Link className="menu__link" to={"/about"}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      <SearchBox />
    </div>
  );
}

export default BottomHeader;
