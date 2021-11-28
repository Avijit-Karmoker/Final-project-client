import React from "react";
import Image from "next/image";
import style from "../../styles/Header.module.css";

const Header = () => {
  return (
    <section>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ lineHeight: ".8em" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active item">
              <div className={style.item1}>
                <Image
                  src="/images/Image-1.png"
                  alt="Background Image 1"
                  width={1920}
                  height={900}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={{ top: "20%" }}
                >
                  <Image
                    src="/images/fork.png"
                    alt="Fork"
                    width={100}
                    height={100}
                    className={style.icon}
                  />
                  <h3>We Don't Just Cook</h3>
                  <h1>We Make Delicious Cook</h1>
                  <p>
                    Granny is a restaurant, bar and coffee roastery located on
                    Egypt. We have
                    <br />
                    awesome recipes and the most talented chefs in town!
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={style.item2}>
                <Image
                  src="/images/Image-2.png"
                  alt="Background Image 2"
                  width={1920}
                  height={900}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={{ top: "35%" }}
                >
                  <h4>Creative & Talanted Chefs</h4>
                  <h1>Hot And Ready To Serve</h1>
                  <button className={style.button}>Reserve Now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={style.item3}>
                <Image
                  src="/images/Image-3.png"
                  alt="Background Image 3"
                  width={1920}
                  height={900}
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={{ top: "45%" }}
                >
                  <h3>Creative & Talanted Chefs</h3>
                  <h1>Hot And Ready To Serve</h1>
                  <button>Reserve Now</button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
