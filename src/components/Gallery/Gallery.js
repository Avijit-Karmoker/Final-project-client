import React from "react";
import Image from "next/image";
import styles from "../../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.text}>
          <h3>Our Gallery</h3>
          <h1>Restaurant Photo Gallery</h1>
        </div>
        <div className={styles.photos}>
          <div>
            <Image src="/images/1.png" alt="Image-1" width={400} height={300} />
          </div>
          <div>
            <Image src="/images/2.png" alt="Image-1" width={400} height={300} />
          </div>
          <div>
            <Image src="/images/3.png" alt="Image-1" width={400} height={300} />
          </div>
          <div>
            <Image src="/images/4.png" alt="Image-1" width={400} height={300} />
          </div>
          <div>
            <Image src="/images/5.png" alt="Image-1" width={400} height={300} />
          </div>
          <div>
            <Image src="/images/6.png" alt="Image-1" width={400} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
