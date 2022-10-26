import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const Estimater2 = () => {
  const [active, setActive] = useState(-1);
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
          <h1 className={styles.est}>Kitchen Price Estimator Steps</h1>
        </div>
        <div className={styles.card}>
          <h2>Now choose the accessories for your kitchen.</h2>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.row}>
              <div className={styles.choice}>
                <div>
                  <span className={styles.radio} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Basic</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    A basic range of accessories usually required to get your
                    ideal kitchen started.
                  </div>
                </div>
              </div>
              <div className={styles.choice}>
                <div>
                  <span className={styles.radio} />
                </div>
                <div className={styles.choiceContent}>
                  
                  <h4>Intermediate</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    A fine range of fittings, cabinets, and more for a smooth
                    culinary experience.
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
                  <h4>Premium</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    A showstopper kitchen with an exclusive range you were
                    always looking for.
                  </div>
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
