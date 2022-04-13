import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
// import "./FeaturedCategories.scss";

function FeaturedCategories() {
  const bookTypes = useFetch("http://localhost:3000/booktypes")?.types || [];
  return (
    <section className="categories">
      <header>
        <div className="title">Featured Categories</div>
        <a href="">
          View More <i className="fa-solid fa-chevron-right"></i>
        </a>
      </header>
      <main>
        {[...bookTypes].slice(0, 4).map((type, i) => (
          <Link to={"/" + type.id} className="card">
            <div className="icon">
              <i className="fa-solid fa-brain-circuit"></i>
            </div>
            <div className="title">{type.name}</div>
            <div className="shop">Shop now</div>
          </Link>
        ))}
      </main>
    </section>
  );
}

export default FeaturedCategories;
