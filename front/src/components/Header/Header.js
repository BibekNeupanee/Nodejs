import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.scss";
import SearchBox from "../SearchBox/SearchBox";
import Settings from "../Settings/Settings";
import BottomHeader from "../BottomHeader/BottomHeader";
import useLocalStorage from "../../hooks/useLocalStorage";

function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const [user, setUser] = useLocalStorage("user", {});
  if (localStorage.getItem("token")) {
    return (
      <header class="main-header">
        <div class="main-header__top">
          <div class="main-header__contact">
            <i class="fa-solid fa-mobile-button"></i> 984734843
          </div>
          <div class="main-header__user-links">
            <a href="#">
              <i class="fa-solid fa-user"></i>
            </a>
            <a href="#">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <a href="#">
              <i class="fa-solid fa-right-from-bracket"></i>
            </a>
          </div>
        </div>
        <div class="main-header__bottom">
          <div class="logo">Book</div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Authors</a>
              </li>
              <li>
                <a href="#">Publishers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div class="main-search">
            <input type="text" placeholder="Search for Books by Keyword" />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </header>
      // <header class="main-header">
      //   <div class="main-header__top">
      //     <div class="main-header__contact">
      //       <i class="fa-solid fa-mobile-button" />
      //       +977-9861282149
      //     </div>
      //     <div class="main-header__user-links">
      //       <Link to={"/profile/" + user?.username} href="#">
      //         <i class="fa-solid fa-user" />
      //         <span>{user?.name}</span>
      //       </Link>
      //       <Link to={"/cart"} href="#">
      //         <i class="fa-solid fa-cart-shopping"></i>
      //       </Link>
      //       <Link to={"/"} onClick={() => handleLogout()}>
      //         <i class="fa-solid fa-right-from-bracket"></i>
      //       </Link>
      //     </div>
      //   </div>
      //   <BottomHeader />
      // </header>
    );
  } else {
    return (
      <header class="main-header">
        <div class="main-header__top">
          <div class="main-header__contact">
            <i class="fa-solid fa-mobile-button" />
            +977-9861282149
          </div>
          <div class="main-header__user-links">
            <Link to={"/login"}>
              <i class="fa-solid fa-user" />
              <span>{user?.name}</span>
            </Link>
            <Link to={"/cart"}>
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
        <BottomHeader />
      </header>
      // <div className="settings">
      //   <Link to={"/login"} className="settings__link">
      //     Login
      //   </Link>
      //   <Link to={"/register"} className="settings__link">
      //     Register
      //   </Link>
      //   {localStorage.getItem("token") ? (
      //     <Link to={"/cart"} className="settings__link">
      //       My Cart
      //     </Link>
      //   ) : (
      //     <Link to={"/login"} className="settings__link">
      //       My Cart
      //     </Link>
      //   )}
      // </div>
    );
  }

  // <header>
  //   <Link to={"/"} className="logo">
  //     <img src={logo} alt="abc" className="image" />
  //   </Link>
  //   <Menu />
  //   <SearchBox />
  //   <Settings />
  // </header>
}

export default Header;
