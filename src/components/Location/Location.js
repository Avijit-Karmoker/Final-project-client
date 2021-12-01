import React from "react";
import Map from "./Map";
import styles from "../../styles/Location.module.css"

const Location = () => {
  return (
    <section>
      <div>
        <Map />
        <div className={styles.details}>
          <div className={styles.detail}>
            <h4>Our Store</h4>
            <p>
              Mirpur Main Road, Mirpur-10 <br /> Dhaka, Bnagladesh
              <br />
              businesstask@gmail.com
              <br />
              +8801000000000
            </p>
            <button className={styles.button}>Get Direction</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
