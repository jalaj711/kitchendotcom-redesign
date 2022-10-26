import React from "react";
import styles from "./styles_2730.module.scss";
import Image1 from "../../../assets/estimator/laminate-1.png";
import Button from "../../../components/Button/Button";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";
const Estimator27 = () => {
  const [active, setActive] = React.useState("");
  const router = useRouter();
  const handleClick = () => {
    var accessories = active;
    if (accessories) {
      FetchFromApi.post(URLs.ESTIMATOR_26_30_SELECT_FINISH, {
        accessories,
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
          <h1 className={styles.est}> Kitchen Price Estimator Steps</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.choices}>
            <div
              className={styles.selectionUnit}
              onClick={() => setActive("Laminate")}
            >
              <div>
                <span
                  className={`${styles.radio} ${
                    active === "Laminate" ? styles.active : ""
                  }`}
                ></span>
              </div>
              <div className={styles.primarySelection}>
                <h2>Laminate</h2>
                <span>
                  Is a smooth, durable finish which gives a clean and rich look.
                </span>
                <img src={Image1.src} />
                <p>
                  <b>Pro Tip: </b>Going for that muted, smooth look for your
                  kitchen? This one&apos;s for you.
                </p>
              </div>
            </div>
            <div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("PVC Laminate")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "PVC Laminate" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>PVC laminate</h3>
                  <p>
                    Is waterproof and withstands prolonged exposure to water and
                    moisture.
                  </p>
                </div>
              </div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("Anti-scratch Acrylic")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Anti-scratch Acrylic" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>Anti-scratch Acrylic</h3>
                  <p>
                    Is an elegant, reflective, glossy finish that is scratch
                    resistant.
                  </p>
                </div>
              </div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("Glossy PU")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Glossy PU" ? styles.active : ""
                    }`}
                  ></span>
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

export default Estimator27;