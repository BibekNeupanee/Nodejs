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
          <div>
            <img
              src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img
              src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtReU98b-aS4kOvEeEG6Hi48wybHwhXgWNMw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Slider;
