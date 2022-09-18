import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Image1 from "../../assets/Rectangle91.png";
import ThreeTriangles from "../../components/ThreeTriangles";

const Estimator13 = () => {
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
          <div className={styles.v2}>
            <div className={styles.pre}>
              <h3>Premium</h3>
              <p className={styles.p2}>
                An exquisite kitchen with sleek fixtures, hardware, cabinets &
                fittings for an elegant and smooth cooking experiences.
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

export default Estimator13;
