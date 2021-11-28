import React from "react";
import Image from "next/image";
import Script from "next/script";
import style from "../../styles/FoodMenu.module.css";

const FoodMenu = () => {
  const selectBreakfast = () => {
    const breakfast = document.getElementById("breakfast");
    const lunch = document.getElementById("lunch");
    const dinner = document.getElementById("dinner");
    const drinks = document.getElementById("drinks");
    breakfast.style.display = "block";
    lunch.style.display = "none";
    dinner.style.display = "none";
    drinks.style.display = "none";
  };

  const selectLunch = () => {
    const breakfast = document.getElementById("breakfast");
    const lunch = document.getElementById("lunch");
    const dinner = document.getElementById("dinner");
    const drinks = document.getElementById("drinks");
    breakfast.style.display = "none";
    lunch.style.display = "block";
    dinner.style.display = "none";
    drinks.style.display = "none";
  };

  const selectDinner = () => {
    const breakfast = document.getElementById("breakfast");
    const lunch = document.getElementById("lunch");
    const dinner = document.getElementById("dinner");
    const drinks = document.getElementById("drinks");
    breakfast.style.display = "none";
    lunch.style.display = "none";
    dinner.style.display = "block";
    drinks.style.display = "none";
  };

  const selectDrinks = () => {
    const breakfast = document.getElementById("breakfast");
    const lunch = document.getElementById("lunch");
    const dinner = document.getElementById("dinner");
    const drinks = document.getElementById("drinks");
    breakfast.style.display = "none";
    lunch.style.display = "none";
    dinner.style.display = "none";
    drinks.style.display = "block";
  };
  return (
    <section style={{ backgroundColor: "#fee2b3" }}>
      <div className={style.menu}>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <p style={{ color: "#a99066" }}>Select your meal</p>
              <h1>
                Popular <span style={{ color: "#fc5200" }}>Foods</span>
              </h1>
              <div className="mb-2">
                <button
                  className={style.selectMenu}
                  onClick={() => selectBreakfast()}
                >
                  <Image
                    src="/images/breakfast.png"
                    height={20}
                    width={20}
                    alt="Breakfast"
                  />
                  <p>Breakfast</p>
                </button>
              </div>
              <div className="mb-2">
                <button
                  className={style.selectMenu}
                  onClick={() => selectLunch()}
                >
                  <Image
                    src="/images/lunch.png"
                    height={20}
                    width={20}
                    alt="Breakfast"
                  />
                  <p>Lunch</p>
                </button>
              </div>
              <div className="mb-2">
                <button
                  className={style.selectMenu}
                  onClick={() => selectDinner()}
                >
                  <Image
                    src="/images/dinner.png"
                    height={20}
                    width={20}
                    alt="Breakfast"
                  />
                  <p>Dinner</p>
                </button>
              </div>
              <div className="mb-2">
                <button
                  className={style.selectMenu}
                  onClick={() => selectDrinks()}
                >
                  <Image
                    src="/images/drinks.png"
                    height={20}
                    width={20}
                    alt="Breakfast"
                  />
                  <p>Drinks</p>
                </button>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 col-sm-12">
              <div className={style.breakfast} id="breakfast">
                <h1>Breakfast</h1>
                <div className={style.menuItems}>
                  <div>
                    <Image
                      src="/images/breakfast1.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/breakfast2.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/breakfast3.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/breakfast4.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                </div>
              </div>

              {/* Lunch */}

              <div className={style.lunch} id="lunch">
                <h1>Lunch</h1>
                <div className={style.menuItems}>
                  <div>
                    <Image
                      src="/images/lunch1.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/lunch2.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/lunch3.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/lunch4.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                </div>
              </div>

              {/* Dinner */}
              <div className={style.dinner} id="dinner">
                <h1>Dinner</h1>
                <div className={style.menuItems}>
                  <div>
                    <Image
                      src="/images/dinner1.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/dinner2.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/dinner3.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/dinner4.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                </div>
              </div>

              {/* Drinks */}
              <div className={style.drinks} id="drinks">
                <h1>Drinks</h1>
                <div className={style.menuItems}>
                  <div>
                    <Image
                      src="/images/drinks1.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/drinks2.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/drinks3.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                  <div>
                    <Image
                      src="/images/drinks4.png"
                      width={350}
                      height={230}
                      alt="Breakfast"
                    />
                    <h4>Italian Sauce Mashroom</h4>
                    <p>$ 20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
