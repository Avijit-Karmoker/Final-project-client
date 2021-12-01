import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlusG,
  faLinkedin,
  faPinterest,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import style from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <section>
      <div className={style.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-lg-4 text-white">
              <h1>Restaurant</h1>
              <p className={style.left}>
                Welcome to Our Software. Company About here. Welcome to Our
                Software. Company About here.
              </p>
              <div className={style.icon}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" style={{width: '20px'}}>
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6"></div>
            <div className="col-md-6 col-sm-12 col-lg-6"></div>
          </div>
        </div>
      <hr />
      <div></div>
      </div>
    </section>
  );
};

export default Footer;
