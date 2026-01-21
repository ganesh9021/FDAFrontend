import React from "react";

const Carousal = () => {
  return (
    <div
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" id="carousel">
        <div
          className="carousel-caption d-none d-md-block"
          style={{ zIndex: "10" }}
        >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn bg-success text-white" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://source.unsplash.com/random/900*700/?barbeque"
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(30%)" }}
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://source.unsplash.com/random/900*700/?pastry"
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(30%)" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900*700/?burger"
            className="d-block w-100"
            alt="..."
            style={{ filter: "brightness(30%)" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
