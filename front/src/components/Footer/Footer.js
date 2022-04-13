import React from "react";
import { Link } from "react-router-dom";
import LinkGroup from "../LinkGroup/LinkGroup";
// import "./Footer.scss";
import logo from "./../../resources/logo1.png";

function Footer() {
  const customerCareLinkGroup = {
    header: "Customer Care",
    links: [
      {
        text: "Help Center",
        url: "/",
      },
      {
        text: "How to Buy",
        url: "/",
      },
      {
        text: "Contact Us",
        url: "/",
      },
    ],
  };
  const followUsLinkGroup = {
    header: "Follow Us",
    links: [
      {
        text: "Facebook",
        url: "/",
      },
      {
        text: "Instagram",
        url: "/",
      },
      {
        text: "Twitter",
        url: "/",
      },
    ],
  };

  return (
    <footer class="main-footer">
      <div class="top">
        <div class="info">
          <Link to={"/"} className="logo">
            <img src={logo} alt="abc" className="image" />
            <span>Hamro Kitab</span>
          </Link>
          <div class="address">Dhapasi, Tokha-10, Kathmandu, Nepal</div>
          <div class="contact">
            <a href="mailto:info@hamrokitab.com" class="email">
              info@hamrokitab.com
            </a>
            <div class="phone">+977-9861282149</div>
            <div class="phone">+977-01-4955735</div>
          </div>
          <div class="social">
            <a href="#" class="facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="twitter">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="pinterest">
              <i class="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div class="menu-group">
          <header>Explore</header>
          <main>
            <a href="#" class="menu-item">
              About
            </a>
            <a href="#" class="menu-item">
              Contact
            </a>
            <a href="#" class="menu-item">
              Sign in
            </a>
            <a href="#" class="menu-item">
              Signup
            </a>
          </main>
        </div>
        <div class="menu-group">
          <header>Top Authors</header>
          <main>
            <a href="#" class="menu-item">
              Kathy Serria
            </a>
            <a href="#" class="menu-item">
              Kathy Serria
            </a>
            <a href="#" class="menu-item">
              Kathy Serria
            </a>
          </main>
        </div>
        <div class="menu-group">
          <header>Top Categories</header>
          <main>
            <a href="#" class="menu-item">
              Fiction
            </a>
            <a href="#" class="menu-item">
              Lifestyle
            </a>
            <a href="#" class="menu-item">
              Educational
            </a>
          </main>
        </div>
      </div>
      <div class="bottom">&copy; Book. All rights reserved</div>
    </footer>
  );
}

export default Footer;
