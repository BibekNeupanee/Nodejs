import React, { useState } from "react";
import AddAuthorList from "../../components/AddAuthorList/AddAuthorList";
import AddBookList from "../../components/AddBookList/AddBookList";
import AddBookType from "../../components/AddBookType/AddBookType";
import AddPublisher from "../../components/AddPublisher/AddPublisher";
import Dash from "../../components/Dash/Dash";
import Header from "../../components/Header/Header";
import PopUp from "../../components/PopUp/PopUp";
import "./Dashboard.scss";

function Dashboard() {
  const [popUpVisible, setPopUpVisible] = useState(false);

  const showPopUp = function () {
    setPopUpVisible(true);
  };

  const hidePopUp = function () {
    setPopUpVisible(false);
  };

  return (
    <>
      {popUpVisible ? (
        <PopUp onHide={hidePopUp}>
          {/* <AddBookList />
          <AddAuthorList/>
          <AddPublisher />
          <AddBookType /> */}
        </PopUp>
      ) : null}
      <Header />
      <Dash onShowPopUp={showPopUp} />
    </>
  );
}

export default Dashboard;
