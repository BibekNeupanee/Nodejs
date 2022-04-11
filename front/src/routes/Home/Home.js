import React from "react";
import BestSelling from "../../components/BestSelling/BestSelling";
import Book from "../../components/Book/Book";
import Featured from "../../components/Featured/Featured";
import FeaturedCategories from "../../components/FeaturedCategories/FeaturedCategories";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

function Home() {
  return (
    // <main className="main-main">
    //   {/* <Slider /> */}
    //   <Book />
    //   <Footer />
    // </main>

    <>
      <Header />
      <main class="main-main">
        <Hero />
        <FeaturedCategories />
        <BestSelling />
        <Featured />
        {/* <Book /> */}
      </main>

      <Footer />
    </>
  );
}

export default Home;
