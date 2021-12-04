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
                  src="/images/Image1.png"
                  alt="Background Image 1"
                  width={1920}
                  height={900}
                />
                <div
                  className="carousel-caption d-md-block" id={style.caption1}
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
                  src="/images/Image2.png"
                  alt="Background Image 2"
                  width={1920}
                  height={900}
                />
                <div
                  className="carousel-caption d-md-block"
                  id={style.caption2}
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
                  src="/images/Image3.png"
                  alt="Background Image 3"
                  width={1920}
                  height={900}
                />
                <div
                  className="carousel-caption d-md-block" id={style.caption3}
                >
                  <h3>Made With Love</h3>
                  <h1>Fresh Ingredient, Tasty Meals</h1>
                  <p>
                    Granny is a restaurant, bar and coffee roastery located on
                    Egypt. We have <br />
                    awesome recipes and the most talented chefs in town!{" "}
                  </p>
                  <button className={style.button}>View Menu</button>
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
