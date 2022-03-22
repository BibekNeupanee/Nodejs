import React, { useState } from "react";
import Dash from "../../components/Dash/Dash";
import Header from "../../components/Header/Header";
import PopUp from "../../components/PopUp/PopUp";
import "./Dashboard.scss";

function Dashboard() {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [popUpComponent, setPopUpComponent] = useState(null);

  const showPopUp = function (component) {
    setPopUpVisible(true);
    setPopUpComponent(component);
  };

  const hidePopUp = function () {
    setPopUpVisible(false);
  };

  return (
    <>
      {popUpVisible ? <PopUp onHide={hidePopUp}>{popUpComponent}</PopUp> : null}
      <Header />
      <Dash onShowPopUp={showPopUp} />
    </>
  );
}

export default Dashboard;
