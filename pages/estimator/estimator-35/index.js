/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import Image1 from "../../../assets/estimator/35-1.png";
import Image2 from "../../../assets/estimator/35-2.png";
import Image3 from "../../../assets/estimator/35-3.png";
import Image4 from "../../../assets/estimator/35-4.png";
import Image5 from "../../../assets/estimator/35-5.png";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const Estimater2 = () => {
  const [active, setActive] = React.useState(-1);
  const router = useRouter();
  const handleClick = () => {
    var kitchenLayout;
    switch (active) {
      case 0:
        kitchenLayout = "L-Shaped";
        break;
      case 1:
        kitchenLayout = "Straight";
        break;
      case 2:
        kitchenLayout = "U-Shaped";
        break;
      case 3:
        kitchenLayout = "Parallel";
        break;
    }
    if (kitchenLayout) {
      FetchFromApi.post(URLs.ESTIMATOR_2_6_SELECT_LAYOUT, {
        kitchenLayout,
      }).then((res) => {
        if (res.status == 200) {
          return res.json().then((res) => {
            if (res.success) {
              router.push(res.next);
            }
          });
        }
      });
    } else {
      alert("Please select one option");
    }
  };
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
                  <h4>Painting</h4>
                </div>
              </div>
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image2.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Plumbing</h4>
                </div>
              </div>
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image3.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Electrical</h4>
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
                  <h4>Platform</h4>
                </div>
              </div>
              <div className={styles.choice}>
                <div className={styles.topImage}>
                  <span className={styles.radio} />
                  <img src={Image5.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Dado</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ width: "100%" }} className={styles.buttons}>
            <Button style={{ float: "left" }} secondary onClick={router.back}>
              Previous
            </Button>
            <Button style={{ float: "right" }} onClick={handleClick}>
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
