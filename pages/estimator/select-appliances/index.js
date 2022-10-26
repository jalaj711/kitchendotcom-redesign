/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import Image1 from "../../../assets/estimator/36-1.png";
import Image2 from "../../../assets/estimator/36-2.png";
import Image3 from "../../../assets/estimator/36-3.png";
import Image4 from "../../../assets/estimator/36-4.png";
import Image5 from "../../../assets/estimator/36-5.png";
import Image6 from "../../../assets/estimator/36-6.png";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";
const Estimater2 = () => {
  const [active, setActive] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const router = useRouter();
  const handleClick = () => {
    const items = [
      "Hob",
      "Chimney",
      "Faucets & Sink",
      "Built-in Microwave",
      "Built-in Oven",
      "Refrigerator",
    ];

    FetchFromApi.post(URLs.ESTIMATOR_36_SELECT_APPLIANCES, {
      appliances: items.filter((_e, index) => active[index]),
    }).then((res) => {
      if (res.status == 200) {
        return res.json().then((res) => {
          if (res.success) {
            router.push(res.next);
          }
        });
      }
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Steps</h1>
        </div>
        <div className={styles.card}>
          <h2>Here come the appliances. Your pick?</h2>
          <h3>Price will not be added in the Estimates</h3>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.row}>
              <div
                className={styles.choice}
                onClick={() => {
                  var arr = active.slice();
                  arr[0] = !arr[0];
                  setActive(arr);
                }}
              >
                <div className={styles.topImage}>
                  <span
                    className={`${styles.radio} ${
                      active[0] ? styles.active : ""
                    }`}
                  />
                  <img src={Image1.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Hob</h4>
                </div>
              </div>
              <div
                className={styles.choice}
                onClick={() => {
                  var arr = active.slice();
                  arr[1] = !arr[1];
                  setActive(arr);
                }}
              >
                <div className={styles.topImage}>
                  <span
                    className={`${styles.radio} ${
                      active[1] ? styles.active : ""
                    }`}
                  />
                  <img src={Image2.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Chimney</h4>
                </div>
              </div>
              <div
                className={styles.choice}
                onClick={() => {
                  var arr = active.slice();
                  arr[2] = !arr[2];
                  setActive(arr);
                }}
              >
                <div className={styles.topImage}>
                  <span
                    className={`${styles.radio} ${
                      active[2] ? styles.active : ""
                    }`}
                  />
                  <img src={Image3.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Faucets &amp; Sink</h4>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div
                className={styles.choice}
                onClick={() => {
                  var arr = active.slice();
                  arr[3] = !arr[3];
                  setActive(arr);
                }}
              >
                <div className={styles.topImage}>
                  <span
                    className={`${styles.radio} ${
                      active[3] ? styles.active : ""
                    }`}
                  />
                  <img src={Image4.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Built-in Microwave</h4>
                </div>
              </div>
              <div
                className={styles.choice}
                onClick={() => {
                  var arr = active.slice();
                  arr[4] = !arr[4];
                  setActive(arr);
                }}
              >
                <div className={styles.topImage}>
                  <span
                    className={`${styles.radio} ${
                      active[4] ? styles.active : ""
                    }`}
                  />
                  <img src={Image5.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Built-in Oven</h4>
                </div>
              </div>
              <div
                className={styles.choice}
                onClick={() => {
                  var arr = active.slice();
                  arr[5] = !arr[5];
                  setActive(arr);
                }}
              >
                <div className={styles.topImage}>
                  <span
                    className={`${styles.radio} ${
                      active[5] ? styles.active : ""
                    }`}
                  />
                  <img src={Image6.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Refrigerator</h4>
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
