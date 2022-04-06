import React from "react";
import useFetch from "../../hooks/useFetch";
import { Slide } from "react-slideshow-image";
import "./Slider.scss";

function Slider() {
  const books = useFetch(`http://localhost:3000/books`)?.books || [];
  return (
    <div className="slide">
      <Slide easing="ease">
        <div className="each-slide">
          <img
            src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
            alt=""
          />
        </div>
        <div className="each-slide">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/old-books-arranged-on-shelf-royalty-free-image-1572384534.jpg"
            alt=""
          />
        </div>
        <div className="each-slide">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtReU98b-aS4kOvEeEG6Hi48wybHwhXgWNMw&usqp=CAU"
            alt=""
          />
        </div>
      </Slide>
    </div>
  );
}

export default Slider;
