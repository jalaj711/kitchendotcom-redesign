import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/Button/Button";
import TwoSquaresTopRight from "../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../components/TwoSquaresBottomLeft";

const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Steps</h1>
        </div>
        <div className={styles.card}>
          <h2>Pick a finish for base &amp; wall cabinets </h2>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.row}>
              <div className={styles.choice}>
                <div>
                  <span className={styles.radio} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Laminate</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    Is a smooth, durable finish which gives a clean and rich
                    look.
                  </div>
                </div>
              </div>
              <div className={styles.choice}>
                <div>
                  <span className={styles.radio} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>PVC laminate</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    Has a lustrous surface that enhances your modular kitchen.
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
                  <h4>Anti-scratch Acrylic</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    Is an elegant, reflective, glossy finish that is scratch
                    resistant.
                  </div>
                </div>
              </div>
              <div className={styles.choice}>
                <div>
                  <span className={styles.radio} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Glossy PU</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    Comes with a slick look, high durability, and a polished
                    finish.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }} className={styles.buttons}>
          <Button style={{ float: "left" }} secondary onClick={/*router.back*/()=>{}}>
            Previous
          </Button>
          <Button style={{ float: "right" }} onClick={/*handleClick*/()=>{}}>
            Next
          </Button>
        </div>
      </div>
      <TwoSquaresTopRight className={styles.square1} />
      <TwoSquaresBottomLeft className={styles.square2} />
    </div>
  );
};

export default Estimater2;
