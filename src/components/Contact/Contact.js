import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import style from "../../styles/Contact.module.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section>
      <div className={style.contact}>
        <div className="container pe-3 ps-3 row m-auto">
          <div className="d-flex align-items-center col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex align-items-center pe-4">
              <span className={style.mapIcon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <p>Nobinogor, Savar, Dhaka</p>
            </div>
            <div className="d-flex align-items-center">
              <span className={style.phoneIcon}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <p>+8801700000000</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.icon}>
              <p>Follow Us</p>
              <a href="" className='ms-3'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <hr className={style.hr}/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
