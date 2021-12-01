import React from "react";
import style from "../../styles/Chef.module.css";
import Image from "next/image";

const Chef = () => {
  return (
    <section>
      <div className={style.section1}>
        <h4>Ready to serve</h4>
        <h3>Talented Chefs</h3>
        <div className={style.shape}>
          <Image
            src="/images/shapee.png"
            alt="shape-1"
            width={110}
            height={25}
          />
        </div>
      </div>
      <div className={style.section2}>
        <div className="container">
          <div className={style.chefs}>
            <div>
              <div className="text-center shadow">
                <Image
                  src="/images/deep.png"
                  alt="Deep"
                  width={250}
                  height={300}
                />
                <h5 className="mt-3">Saimum Deep</h5>
                <p className="pb-3">CEO & Founder</p>
              </div>
            </div>
            <div>
              <div className="text-center shadow">
                <Image
                  src="/images/rupon.png"
                  alt="Deep"
                  width={250}
                  height={300}
                />
                <h5 className="mt-3">Rifti Rupon</h5>
                <p className="pb-3">Korean Master Chef</p>
              </div>
            </div>
            <div>
              <div className="text-center shadow">
                <Image
                  src="/images/reju.png"
                  alt="Deep"
                  width={250}
                  height={300}
                />
                <h5 className="mt-3">Rezaul Raaj</h5>
                <p className="pb-3">Master Chef</p>
              </div>
            </div>
            <div>
              <div className="text-center shadow">
                <Image
                  src="/images/ripa.png"
                  alt="Deep"
                  width={250}
                  height={300}
                />
                <h5 className="mt-3">Ripa Paul</h5>
                <p className="pb-3">Chinese Master Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
