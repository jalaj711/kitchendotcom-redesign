import React from "react";
import styles from "./styles.module.scss";
import Image1 from "../../assets/estimator/laminate-3.png";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";

const Estimator29 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.choices}>
            <div className={styles.selectionUnit}>
              <h2>Anti-scratch Acrylic</h2>
              <span>
                Is an elegant, reflective, glossy finish that is scratch
                resistant.
              </span>
              <img src={Image1.src} />
              <p>
                <b>Pro Tip: </b>Dreaming of a chic kitchen with a touch of
                luxury? Go for this one.
              </p>
            </div>
            <div>
              <div className={styles.selectionUnit}>
                <h3>Laminate</h3>
                <p>
                  Is a smooth, durable finish which gives a clean and rich look.
                </p>
              </div>
              <div className={styles.selectionUnit}>
                <h3>PVC laminate</h3>
                <p>
                  Is waterproof and withstands prolonged exposure to water and
                  moisture.
                </p>
              </div>
              <div className={styles.selectionUnit}>
                <h3>Glossy PU</h3>
                <p>
                  Comes with a slick look, high durability, and a polished
                  finish.
                </p>
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
