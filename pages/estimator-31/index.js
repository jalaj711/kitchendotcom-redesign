import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Step 2</h1>
        </div>
        <div className={styles.card}>
          <h2>Now choose the accessories for your kitchen.</h2>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.row}>
              <div className={styles.choice}>
                <div>
                  <span className={styles.radio} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Basic</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    A basic range of accessories usually required to get your
                    ideal kitchen started.
                  </div>
                </div>
              </div>
              <div className={styles.choice}>
                <div>
                  <span className={styles.radio} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Intermediate</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    A fine range of fittings, cabinets, and more for a smooth
                    culinary experience.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.row} style={{ marginBottom: 12 }}>
              <div className={styles.choice}>
                <div>
                  <span className={styles.radio} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Premium</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    A showstopper kitchen with an exclusive range you were
                    always looking for.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button secondary>Back</Button>
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

export default Estimater2;
