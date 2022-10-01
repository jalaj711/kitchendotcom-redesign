import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Image1 from "../../assets/Rectangle3492.png";
import ThreeTriangles from "../../components/ThreeTriangles";

const Estimator14 = () => {
  return (
    <div className={styles.container}>
      <DoodleDots className={styles.dots} />
      <div className={styles.head}>
        <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
      </div>
      <div className={styles.card}>
        <ThreeTriangles className={styles.tri} />
        <div className={styles.div1}>
          <div className={styles.v1}>
            <ThreeTriangles className={styles.tri1} />
            <h2 className={styles.ess}>HDHMR</h2>
            <p className={styles.ran}>
              Has high strength and density, and a solid screw-holding capacity.
            </p>
          </div>
          <div className={styles.img}>
            <img className={styles.img1} src={Image1.src} />
          </div>
          <div className={styles.para}>
            <h4>PRO TIP:</h4>
            <p className={styles.p1}>
              Makes for a good choice as it has load-bearing capacity at a lower
              cost.
            </p>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.v2}>
            <div className={styles.pre}>
              <h3>MR Plywood</h3>
              <p className={styles.p2}>
                Is moisture and termite resistant and does not wear off easily.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.v3}>
            <div className={styles.lux}>
              <h3>BWR Plywood</h3>
              <p className={styles.p3}>
                Is water resistant and works well in areas prone to water
                exposure.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.div4}>
          <div className={styles.v4}>
            <div className={styles.lux}>
              <h3>BWP Plywood</h3>
              <p className={styles.p4}>
                Is waterproof and withstands prolonged exposure to water and
                moisture.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttons1}>
        <button className={styles.back}>Back</button>

        <button className={styles.next}>Next</button>
      </div>
      <DoodleDots className={styles.dots1} />
    </div>
  );
};

export default Estimator14;
