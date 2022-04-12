import React from "react";
// import "./LinkGroup.scss";

function LinkGroup(linkGroupObject) {
  return (
    <div className="link-group">
      <div className="link-group__header">{linkGroupObject.header}</div>
      <div className="link-group__links">
        {linkGroupObject.links.map((link, i) => (
          <a key={i} className="link-group__link" href={link.url}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default LinkGroup;
