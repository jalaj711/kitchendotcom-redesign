import React from "react";
import styles from "./styles.module.scss";
import Image1 from "../../assets/estimator/33.png";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";

const Estimator27 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.choices}>
          <div className={styles.selectionUnit}>
            <h2>Intermediate </h2>
            <span>
              A fine range of fittings, cabinets, and more for a smooth culinary
              experience.
            </span>
            <img src={Image1.src} />
            <p>
              <b>Pro Tip: </b>Pick this if you experiment with cooking and need
              more units to ease your time in the kitchen.
            </p>
          </div>
          <div className={styles.rightChoices}>
            <div className={styles.selectionUnit}>
              <h3>Basic</h3>
              <p>
                A basic range of accessories usually required to get your ideal
                kitchen started.
              </p>
            </div>
            <div className={styles.selectionUnit}>
              <h3>Premium</h3>
              <p>
                A showstopper kitchen with an exclusive range you were always
                looking for.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Button secondary>
            Back
          </Button>
          <Button>Next</Button>
        </div>
      </div>

      <div className={styles.decoratives}>
        <ThreeTriangles
          style={{ top: "70%", left: "-25vw", width: "max(150px, 50vw)" }}
        />
        <ThreeTriangles
          style={{
            top: "30%",
            right: "min(-50px, -25vw)",
            width: "max(150px, 50vw)",
          }}
        />
        <span style={{ top: "0%", left: "0%" }} className={styles.circle} />
        <span style={{ top: "40%", left: "15%" }} className={styles.circle} />
        <span style={{ top: "0%", left: "65%" }} className={styles.circle} />
        <span style={{ top: "20%", left: "100%" }} className={styles.circle} />
        <span style={{ top: "40%", left: "100%" }} className={styles.circle} />
      </div>
    </div>
  );
};

export default Estimator27;
