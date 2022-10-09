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
        <h2>Which type of loft are you looking for?</h2>
        <div className={styles.kitchenTypeHolder}>
          <div className={styles.row}>
            <div className={styles.choice}>
              <div>
                <span className={styles.radio} />
              </div>
              <div className={styles.choiceContent}>
                <h4>Customized loft</h4>
                <div style={{marginTop: 8}}>
                  <span>Feet: </span>
                  <Input type="number" small border placeholder={0} />
                </div>
              </div>
            </div>
            <div className={styles.choice}>
              <div>
                <span className={styles.radio} />
              </div>
              <div className={styles.choiceContent}>
                <h4>2 feet loft</h4>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.choice}>
              <div>
                <span className={styles.radio} />
              </div>
              <div className={styles.choiceContent}>
                <h4>No loft</h4>
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
