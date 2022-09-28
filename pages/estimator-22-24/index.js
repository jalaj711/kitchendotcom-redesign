import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import Image from "../../assets/estimator/22.png";
import Input from "../../components/Input/Input";

const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.est}>Kitchen Price Estimator Step 2</h1>
      </div>
      <div className={styles.card}>
        <h2>How about adding a Countertop?</h2>
        <div className={styles.kitchenTypeHolder}>
          <img src={Image.src} />
          <div className={styles.dimensions}>
            <button className={styles.button}>No</button>
            <button className={styles.button}>Yes</button>
          </div>
        </div>
        
      </div>
      <div className={styles.buttons}>
          <Button large secondary>
            Back
          </Button>
          <Button large>Next</Button>
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
