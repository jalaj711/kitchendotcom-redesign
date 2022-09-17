import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Image1 from "../../assets/Rectangle91.png";

const Estimator13 = () => {
  return (
    <div className={styles.container}>
      <DoodleDots className={styles.dots} />
      <div className={styles.head}>
        <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.div1}>
          <div className={styles.v1}>
            <h2 className={styles.ess}>Essentials</h2>
          </div>
          <div className={styles.img}>
            <img className={styles.img1} src={Image1.src} />
          </div>
          <div className={styles.para}>
            <h4>PRO TIP:</h4>
            <p className={styles.p1}>
              If you’re lookingfor a kitchen with the necessary units for an
              easycooking time this is yours pick!{" "}
            </p>
          </div>
        </div>
        <div className={styles.div2}>
            <div className={styles.v2}></div>
        </div>
      </div>
    </div>
  );
};

export default Estimator13;
