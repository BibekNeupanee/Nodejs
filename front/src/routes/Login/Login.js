import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserLogin from "../../components/UserLogin/UserLogin";
import "./Login.scss";

function Login() {
  return (
    <div>
      <Header />
      <UserLogin />
      <Footer />
    </div>
  );
}

export default Login;
