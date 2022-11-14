import React from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import Image from "../../../assets/estimator/22.webp";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const Estimator22 = () => {
  const [active, setActive] = React.useState(true);
  const router = useRouter();
  const handleClick = () => {
      FetchFromApi.post(URLs.ESTIMATOR_22_24_SELECT_COUNTERTOP, {
        countertop: active,
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
          <h2>How about adding a Countertop?</h2>
          <div className={styles.kitchenTypeHolder}>
            <img src={Image.src} />
            <div className={styles.dimensions}>
              <button className={styles.button} onClick={() => setActive(false)}>
                <span
                  className={`${styles.radio} ${
                    !active? styles.active : ""
                  }`}
                />
                No
              </button>
              <button className={styles.button} onClick={() => setActive(true)}>
                <span
                  className={`${styles.radio} ${
                    active ? styles.active : ""
                  }`}
                />
                Yes
              </button>
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

export default Estimator22;
