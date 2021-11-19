import React from "react";
import Image from "next/image";
import style from '../../styles/Header.module.css'

const Header = () => {
  return (
    <section>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
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
                  opacity={.5}
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className={style.item1}>
                <Image
                  src="/images/Image-2.png"
                  alt="Background Image 2"
                  width={1920}
                  height={900}
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className={style.item1}>
                <Image
                  src="/images/Image-3.png"
                  alt="Background Image 3"
                  width={1920}
                  height={900}
                  z-index="-1"
                />
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
