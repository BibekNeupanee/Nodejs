import React from "react";
import "./FeaturedCategories.scss";

function FeaturedCategories() {
  return (
    <section class="categories">
      <header>
        <div class="title">Featured Categories</div>
        <a href="">
          All Categories <i class="fa-solid fa-chevron-right"></i>
        </a>
      </header>
      <main>
        <a href="#" class="card">
          <div class="icon">
            <i class="fa-solid fa-brain-circuit"></i>
          </div>
          <div class="title">Fiction</div>
          <div class="shop">Shop now</div>
        </a>
        <a href="#" class="card">
          <div class="icon">
            <i class="fa-solid fa-brain-circuit"></i>
          </div>
          <div class="title">Fiction</div>
          <div class="shop">Shop now</div>
        </a>
        <a href="#" class="card">
          <div class="icon">
            <i class="fa-solid fa-brain-circuit"></i>
          </div>
          <div class="title">Fiction</div>
          <div class="shop">Shop now</div>
        </a>
        <a href="#" class="card">
          <div class="icon">
            <i class="fa-solid fa-brain-circuit"></i>
          </div>
          <div class="title">Fiction</div>
          <div class="shop">Shop now</div>
        </a>
      </main>
    </section>
  );
}

export default FeaturedCategories;
