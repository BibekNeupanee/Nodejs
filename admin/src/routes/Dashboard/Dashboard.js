import React, { useState } from "react";
import BookList from "../../components/BookList/BookList";
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
          <BookList />
        </PopUp>
      ) : null}
      <Header />
      <Dash onShowPopUp={showPopUp} />
      {/* <button onClick={(_) => showPopUp()}>Show</button> */}
    </>
  );
}

export default Dashboard;
