import React from "react";
import styles from "./styles.module.scss";
import Image1 from "../../assets/estimator/32.png";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import TwoSquares from "../../components/TwoSquares";

const Estimator27 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        {" "}
        <div className={styles.head}>
          <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.choices}>
            <div className={styles.selectionUnit}>
              <h2>Basic </h2>
              <span>
                A basic range of accessories usually required to get your ideal
                kitchen started.
              </span>
              <img src={Image1.src} />
              <p>
                <b>Pro Tip: </b>Consider this if you need basic units within a
                budget for a comfortable cooking experience.
              </p>
            </div>
            <div className={styles.rightChoices}>
              <div className={styles.selectionUnit}>
                <div>
                  <span className={styles.radio}></span>
                </div>
                <div>
                  <h3>Intermediate</h3>
                  <p>
                    A fine range of fittings, cabinets, and more for a smooth
                    culinary experience.
                  </p>
                </div>
              </div>
              <div className={styles.selectionUnit}>
                <div>
                  <span className={styles.radio}></span>
                </div>
                <div>
                  <h3>Premium</h3>
                  <p>
                    A showstopper kitchen with an exclusive range you were
                    always looking for.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <Button secondary>Back</Button>
            <Button>Next</Button>
          </div>
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
