import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserRegister from "../../components/UserRegister/UserRegister";
import "./Register.scss";

function Register() {
  return (
    <div>
      <Header />
      <UserRegister />
      <Footer />
    </div>
  );
}

export default Register;
