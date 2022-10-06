import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Image1 from "../../assets/Rectangle15.png";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";

const Estimator13 = () => {
  return (
    <div className={styles.container}>
      <DoodleDots className={styles.dots} />
      <div className={styles.head}>
        <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.section}>
          <div className={styles.b0}>
            <h2>Build your own package</h2>
            <p className={styles.ran}>
              Select materials, finishes, accessories and more of your choices
              from a range of collections for your kitchen.
            </p>

            <p>
              <b>PRICE: Based on your selection</b>
            </p>

            <p className={styles.p1}>
              <b>PRO TIP: </b>If you’re sure about the other options, you can
              always customise your package that works well for your kitchen
              needs.
            </p>
          </div>

          <div className={styles.sec2}>
            <div className={styles.b1}>
              <h3>Essentials</h3>
              <p className={styles.p2}>
                A range that has the basic unit and accessories necessary for a
                comfortable modular kitchen.
              </p>
            </div>
            <div className={styles.b1}>
              <h3>Premium</h3>
              <p className={styles.p2}>
                An exquisite kitchen with sleek fixtures, hardware, cabinets &
                fittings for an elegant and smooth cooking experiences.
              </p>
            </div>
            <div className={styles.b1}>
              <h3>Luxe</h3>
              <p className={styles.p2}>
                Lixurious dream kitchen that’s a fine blend of aesthetics and
                high functionality complete with swanky units and accessories.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttons1}>
          <Button secondary>Back</Button>
          <Button>Next</Button>
        </div>
      </div>

      <DoodleDots className={styles.dots1} />
    </div>
  );
};

export default Estimator13;
