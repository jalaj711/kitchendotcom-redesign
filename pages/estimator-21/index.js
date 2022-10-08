import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Image1 from "../../assets/Rectangle21.png";
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
            <h2>BWP Plywood</h2>
            <p className={styles.ran}>
              Is waterproof and withstands prolonged exposure to water and
              moisture.
            </p>

            <img className={styles.img1} src={Image1.src} />

            <p className={styles.p1}>
              <b>PRO TIP: </b>Looking for a waterproof material? Then consider
              this one!
            </p>
          </div>

          <div className={styles.sec2}>
            <div className={styles.b1}>
              <h3>HDHMR</h3>
              <p className={styles.p2}>
                Has high strength and density, and a solid screw-holding
                capacity.
              </p>
            </div>
            <div className={styles.b1}>
              <h3>BWR Plywood</h3>
              <p className={styles.p2}>
                Is water resistant and works well in areas prone to water
                exposure.
              </p>
            </div>
            <div className={styles.b1}>
              <h3>MR Plywood</h3>
              <p className={styles.p2}>
                Is moisture and termite resistant and does not wear off easily.
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
