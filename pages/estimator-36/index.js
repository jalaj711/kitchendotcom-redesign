/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import Image1 from "../../assets/estimator/36-1.png";
import Image2 from "../../assets/estimator/36-2.png";
import Image3 from "../../assets/estimator/36-3.png";
import Image4 from "../../assets/estimator/36-4.png";
import Image5 from "../../assets/estimator/36-5.png";
import Image6 from "../../assets/estimator/36-6.png";
import TwoSquares from "../../components/TwoSquares";
const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Step 2</h1>
        </div>
        <div className={styles.card}>
          <h2>Select the on-site services you would require. </h2>
          <h3>Price will not be added in the Estimates</h3>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.row}>
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image1.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Hob</h4>
                </div>
              </div>
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image2.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Chimney</h4>
                </div>
              </div>
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image3.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Faucets &amp; Sink</h4>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image4.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Built-in Microwave</h4>
                </div>
              </div>{" "}
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image5.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Built-in Oven</h4>
                </div>
              </div>
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image6.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Refrigerator</h4>
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
