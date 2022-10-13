import React from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Image1 from "../../assets/Rectangle15.png";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import TwoSquares from "../../components/TwoSquares";

const Estimator13 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.section}>
          <div className={styles.b0}>
            <h2>Luxe</h2>
            <p className={styles.ran}>
              Lixurious dream kitchen that’s a fine blend of aesthetics and high
              functionality complete with swanky units and accessories.
            </p>

            <img className={styles.img1} src={Image1.src} />

            <p className={styles.p1}>
              <b>PRO TIP: </b>Choose this if you want to go all out to ensure
              your dream luxury kitchen gives you an exquisite culinary
              expierience that fits your lifestyle.
            </p>
          </div>

          <div className={styles.sec2}>
            <div className={styles.b1}>
              <div>
                <span className={styles.radio}></span>
              </div>
              <div>
                <h3>Essentials</h3>
                <p className={styles.p2}>
                  A range that has the basic unit and accessories necessary for
                  a comfortable modular kitchen.
                </p>
              </div>
            </div>
            <div className={styles.b1}>
              <div>
                <span className={styles.radio}></span>
              </div>
              <div>
                <h3>Premium</h3>
                <p className={styles.p2}>
                  An exquisite kitchen with sleek fixtures, hardware, cabinets &
                  fittings for an elegant and smooth cooking experiences.
                </p>
              </div>
            </div>
            <div className={styles.b1}>
              <div>
                <span className={styles.radio}></span>
              </div>
              <div>
                <h3>Build your own package</h3>
                <p className={styles.p2}>
                  Select materials, finishes, accessories and more of your
                  choices from a range of collections for your kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons1}>
          <Button secondary>Back</Button>
          <Button>Next</Button>
        </div>
      </div>
      <div className={styles.decoratives}>
        <TwoSquares
          style={{ top: "90%", left: "-22vw", width: "max(150px, 50vw)" }}
        />
        <TwoSquares
          style={{
            top: "-4%",
            right: "min(-50px, -20vw)",
            width: "max(150px, 50vw)",
          }}
        />
      </div>
    </div>
  );
};

export default Estimator13;
