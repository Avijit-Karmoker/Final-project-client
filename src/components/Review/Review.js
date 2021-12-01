import React from "react";
import styles from "../../styles/Review.module.css";
import Image from "next/image";

const Review = () => {
  return (
    <section>
      <div className={styles.review}>
        <div className="container">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className={styles.image1}>
                  <Image
                    src="/images/chef-hat2.png"
                    alt="Image"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="text-center align-items-center">
                  I think the most wonderful thing in the world is another chef.
                  I'm always excited about learning new things about food.
                </h5>
                <p className={styles.name}>- Saimum Deep</p>
              </div>
              <div className="carousel-item">
                <div className={styles.image1}>
                  <Image
                    src="/images/chef-hat2.png"
                    alt="Image"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="text-center align-items-center">
                  I think the most wonderful thing in the world is another chef.
                  I'm always excited about learning new things about food.
                </h5>
                <p className={styles.name}>- Rezaul Razz</p>
              </div>
              <div className="carousel-item">
                <div className={styles.image1}>
                  <Image
                    src="/images/chef-hat2.png"
                    alt="Image"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="text-center align-items-center">
                  I think the most wonderful thing in the world is another chef.
                  I'm always excited about learning new things about food.
                </h5>
                <p className={styles.name}>- Rifti Rupon</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image2}>
          <Image alt="Image" src="/images/shapee.png" width={70} height={20} />
        </div>
      </div>
    </section>
  );
};

export default Review;
