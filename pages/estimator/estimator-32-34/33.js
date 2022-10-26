import React from "react";
import styles from "./styles.module.scss";
import Image1 from "../../../assets/estimator/33.png";
import Button from "../../../components/Button/Button";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";
const Estimator27 = () => {
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
          <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.choices}>
            <div className={styles.selectionUnit}>
              <div>
                <span className={styles.radio}></span>
              </div>
              <div className={styles.primarySelection}>
                <h2>Intermediate</h2>
                <span>
                  A fine range of fittings, cabinets, and more for a smooth
                  culinary experience.
                </span>
                <img src={Image1.src} />
                <p>
                  <b>Pro Tip: </b>Pick this if you experiment with cooking and
                  need more units to ease your time in the kitchen.
                </p>
              </div>
            </div>
            <div className={styles.rightChoices}>
              <div className={styles.selectionUnit}>
                <div>
                  <span className={styles.radio}></span>
                </div>
                <div>
                  <h3>Basic</h3>
                  <p>
                    A basic range of accessories usually required to get your
                    ideal kitchen started.
                  </p>
                </div>
              </div>
              <div className={styles.selectionUnit}>
                <div>
                  <span className={styles.radio}></span>
                </div>
                <div>
                  <h3>Premium</h3>
                  <p>
                    A showstopper kitchen with an exclusive range you were
                    always looking for.
                  </p>
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
      <TwoSquaresTopRight className={styles.square1} />
      <TwoSquaresBottomLeft className={styles.square2} />
    </div>
  );
};

export default Estimator27;
