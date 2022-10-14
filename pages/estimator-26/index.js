import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TwoSquares from "../../components/TwoSquares";

const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Step 2</h1>
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
        <div className={styles.buttons}>
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
