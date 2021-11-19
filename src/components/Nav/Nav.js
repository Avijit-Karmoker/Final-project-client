import React from "react";
import Image from "next/image"
import style from "../../styles/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <section className={style.navbar}>
      <div className="container">
        <nav className="navbar navbar-expand-lg align-items-center">
          <div className="container-fluid">
            <a className="navbar-brand" href="/.">
              <span className={style.logo}>Restaurant</span>
            </a>
            <button
              className="navbar-toggler pt-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                style={{ width: "1em", height: "22px" }}
              ><FontAwesomeIcon icon={faBars} /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/.">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <from className={style.form}>
                    <input type="text" />
                    <button>
                      <FontAwesomeIcon
                        style={{ color: "#fff" }}
                        icon={faSearch}
                      />
                    </button>
                  </from>
                </li>
                <li className="nav-item">
                  <button className={style.cart}>
                    <a href="#">
                      <FontAwesomeIcon icon={faCartPlus} />
                    </a>
                  </button>
                </li>
                <li className="nav-item pe-0">
                  <span className={style.wrapper}>
                    <a className="nav-link" href="#">
                      Login
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
