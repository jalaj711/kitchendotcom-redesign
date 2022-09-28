import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Button from "../../components/Button/Button";
import ThreeTriangles from "../../components/ThreeTriangles";
const Estimator12 = () => {
  return (
    <div className={styles.container}>
      <ThreeTriangles className={styles.tri} />
      <div className={styles.head}>
        <DoodleDots className={styles.dots} />
        <h1 className={styles.head1}>Kitchen Price Estimate Steps</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.head2}>
          <h2 className={styles.mod}>
            Now refer to your choosen layout here and add the measurment
          </h2>
        </div>
        <div className={styles.row1}>
          <div className={styles.div1}>
            <div className={styles.ess}>
              <h3>HDHMR</h3>
            </div>
            <p>
              Has high strength and density, and a solid screw-holding capacity.
            </p>
          </div>
          <div className={styles.div2}>
            <h3>MR Plywood</h3>

            <p>
              Is moisture and termite resistant and does not wear off easily.
            </p>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.div1}>
            <div className={styles.ess}>
              <h3>BWR Plywood</h3>
            </div>
            <p>
              Is water resistant and works well in areas prone to water
              exposure.
            </p>
          </div>
          <div className={styles.div2}>
            <h3>BWP Plywood</h3>

            <p>
              Is waterproof and withstands prolonged exposure to water and
              moisture.
            </p>
          </div>
        </div>
      </div>
      {/* <ThreeTriangles className={styles.tri} /> */}

      <div className={styles.buttons1}>
        <button className={styles.back}>Back</button>

        <button className={styles.next}>Next</button>
      </div>
      <DoodleDots className={styles.dots1} />
    </div>
  );
};

export default Estimator12;
