import React from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Image from "../../assets/estimator/estimator-7-main.png";
import LoginImage from "../../assets/estimator/7.png";

const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Step 3</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.imageWithSquare}>
              <img src={Image.src} />
            </div>
            <div className={styles.rightBar}>
              <div className={styles.rightBarTitle}>
                <h2>Please enter your details to get the details</h2>
                <img src={LoginImage.src} />
              </div>
              <div className={styles.dataForm}>
                <div>
                  <div>Your full name:</div>
                  <Input type="text" />
                </div>
                <div>
                  <div>Your phone number:</div>
                  <Input type="text" />
                </div>
                <div>
                  <div>Your email id:</div>
                  <Input type="text" />
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
