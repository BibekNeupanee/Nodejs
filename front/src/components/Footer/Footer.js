import React from "react";
import LinkGroup from "../LinkGroup/LinkGroup";
import "./Footer.scss";
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
    <footer>
      <LinkGroup {...customerCareLinkGroup} />
      <LinkGroup {...followUsLinkGroup} />
    </footer>
  );
}

export default Footer;
