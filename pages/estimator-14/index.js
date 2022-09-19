import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Image1 from "../../assets/Rectangle991.png";
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
            <h2 className={styles.ess}>Premium</h2>
            <p className={styles.ran}>
              An exquisite kitchen with sleek fixtures, hardware, cabinets &
              fittings for an elegant and smooth cooking experiences.
            </p>
          </div>
          <div className={styles.img}>
            <img className={styles.img1} src={Image1.src} />
          </div>
          <div className={styles.para}>
            <h4>PRO TIP:</h4>
            <p className={styles.p1}>
              Consider this if you’re looking for a exclusive
              accessories,cabinets and more to make your version of the
              masterchef kitchen.
            </p>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.v2}>
            <div className={styles.pre}>
              <h3>Essentials</h3>
              <p className={styles.p2}>
                A range that has the basic unit and accessories necessary for a
                comfortable modular kitchen.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.v3}>
            <div className={styles.lux}>
              <h3>Luxe</h3>
              <p className={styles.p3}>
                Lixurious dream kitchen that’s a fine blend of aesthetics and
                high functionality complete with swanky units and accessories.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.div4}>
          <div className={styles.v4}>
            <div className={styles.lux}>
              <h3>Build your own package</h3>
              <p className={styles.p4}>
                Select materials, finishes, accessories and more of your choices
                from a range of collections for your kitchen.
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
