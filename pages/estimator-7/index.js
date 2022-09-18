import React from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Image from "../../assets/estimator/estimator-3-main.png";
const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.est}>Kitchen Price Estimator Step 3</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.kitchenTypeHolder}>
          <div className={styles.imageWithSquare}>
            <img src={Image.src} />
          </div>
          <div className={styles.rightBar}>
            <h2>Please enter your details to get the details</h2>
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
        <div style={{ width: "100%" }}>
          <Button style={{ float: "left" }}>Previous</Button>
          <Button style={{ float: "right" }}>Next</Button>
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
