import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.est}>Kitchen Price Estimate Steps</h1>
      </div>
      <div className={styles.card}>
        <h2>Now refer to your choosen layout here and add the measurment </h2>
        <div className={styles.kitchenTypeHolder}>
          <div className={styles.row}>
            <div className={styles.choice}>
              <div>
                <span className={styles.radio} />
              </div>
              <div className={styles.choiceContent}>
                <h4>HDHMR</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Has high strength and density, and a solid screw-holding
                  capacity.
                </div>
              </div>
            </div>
            <div className={styles.choice}>
              <div>
                <span className={styles.radio} />
              </div>
              <div className={styles.choiceContent}>
                <h4>MR Plywood</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is moisture and termite resistant and does not wear off
                  easily.
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
                <h4>BWR Plywood</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is water resistant and works well in areas prone to water
                  exposure.
                </div>
              </div>
            </div>
            <div className={styles.choice}>
              <div>
                <span className={styles.radio} />
              </div>
              <div className={styles.choiceContent}>
                <h4>BWP Plywood</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is waterproof and withstands prolonged exposure to water and
                  moisture.
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
