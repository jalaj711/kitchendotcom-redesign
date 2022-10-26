import React from "react";
import styles from "./styles.module.scss";
import Image1 from "../../../assets/estimator/laminate-3.png";
import Button from "../../../components/Button/Button";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";
const Estimator29 = () => {
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
                <h2>Anti-scratch Acrylic</h2>
                <span>
                  Is an elegant, reflective, glossy finish that is scratch
                  resistant.
                </span>
                <img src={Image1.src} />
                <p>
                  <b>Pro Tip: </b>Dreaming of a chic kitchen with a touch of
                  luxury? Go for this one.
                </p>
              </div>
            </div>
            <div>
              <div className={styles.selectionUnit}>
                <div>
                  <span className={styles.radio}></span>
                </div>
                <div>
                  <h3>Laminate</h3>
                  <p>
                    Is a smooth, durable finish which gives a clean and rich
                    look.
                  </p>
                </div>
              </div>
              <div className={styles.selectionUnit}>
                <div>
                  <span className={styles.radio}></span>
                </div>
                <div>
                  <h3>PVC laminate</h3>
                  <p>
                    Is waterproof and withstands prolonged exposure to water and
                    moisture.
                  </p>
                </div>
              </div>
              <div className={styles.selectionUnit}>
                <div>
                  <span className={styles.radio}></span>
                </div>
                <div>
                  <h3>Glossy PU</h3>
                  <p>
                    Comes with a slick look, high durability, and a polished
                    finish.
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

export default Estimator29;
