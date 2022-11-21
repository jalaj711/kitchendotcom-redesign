/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import Image1 from "../../../assets/estimator/35-1.webp";
import Image2 from "../../../assets/estimator/35-2.webp";
import Image3 from "../../../assets/estimator/35-3.webp";
import Image4 from "../../../assets/estimator/35-4.webp";
import Image5 from "../../../assets/estimator/35-5.webp";

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
  ]);
  const router = useRouter();
  const handleClick = () => {
    const items = [
      "Painting",
      "Plumbing",
      "Electrical",
      "Platform",
      "Dado"
    ];

    FetchFromApi.post(URLs.ESTIMATOR_35_SELECT_SERVICES, {
      services: items.filter((_e, index) => active[index]),
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
          <h2>Select the on-site services you would require. </h2>
          <h3>Price will not be added in the Estimates</h3>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.row}>
              <div className={styles.choice} 
                onClick={() => {
                  var arr = active.slice();
                  arr[0] = !arr[0];
                  setActive(arr);
                }}>
                <div className={styles.topImage}>
                  <span className={`${styles.radio} ${
                      active[0] ? styles.active : ""
                    }`} />
                  <img src={Image1.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Painting</h4>
                </div>
              </div>
              <div className={styles.choice} 
                onClick={() => {
                  var arr = active.slice();
                  arr[1] = !arr[1];
                  setActive(arr);
                }}>
                <div className={styles.topImage}>
                  <span className={`${styles.radio} ${
                      active[1] ? styles.active : ""
                    }`} />
                  <img src={Image2.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Plumbing</h4>
                </div>
              </div>
              <div className={styles.choice} 
                onClick={() => {
                  var arr = active.slice();
                  arr[2] = !arr[2];
                  setActive(arr);
                }}>
                <div className={styles.topImage}>
                  <span className={`${styles.radio} ${
                      active[2] ? styles.active : ""
                    }`} />
                  <img src={Image3.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Electrical</h4>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.choice} 
                onClick={() => {
                  var arr = active.slice();
                  arr[3] = !arr[3];
                  setActive(arr);
                }}>
                <div className={styles.topImage}>
                  <span className={`${styles.radio} ${
                      active[3] ? styles.active : ""
                    }`} />
                  <img src={Image4.src} className={styles.image} />
                </div>
                <div className={styles.choiceTitle}>
                  <h4>Platform</h4>
                </div>
              </div>
              <div className={styles.choice} 
                onClick={() => {
                  var arr = active.slice();
                  arr[4] = !arr[4];
                  setActive(arr);
                }}>
                <div className={styles.topImage}>
                  <span className={`${styles.radio} ${
                      active[4] ? styles.active : ""
                    }`} />
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
    </div>
  );
};

export default Estimater2;
