import React from "react";
import "./PopUp.scss";

function PopUp(props) {
  return (
    <>
      <div className="overlay visible"></div>
      <div className="popup visible">
        <div className="close-btn" onClick={(_) => props.onHide()}>
          &times;
        </div>
      </div>
    </>
  );
}

export default PopUp;
