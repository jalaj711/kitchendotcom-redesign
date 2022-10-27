import React from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";
const Estimater26 = () => {
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
          <h1 className={styles.est}>Kitchen Price Estimator Steps</h1>
        </div>
        <div className={styles.card}>
          <h2>Pick a finish for base &amp; wall cabinets </h2>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.row}>
              <div
                className={styles.choice}
                onClick={() => setActive("Laminate")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Laminate" ? styles.active : ""
                    }`}
                  />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Laminate</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    Is a smooth, durable finish which gives a clean and rich
                    look.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/select-finish/laminate')}>
                    &#9432;
                  </span>
                </div>
              </div>
              <div
                className={styles.choice}
                onClick={() => setActive("PVC Laminate")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "PVC Laminate" ? styles.active : ""
                    }`}
                  />
                </div>
                <div className={styles.choiceContent}>
                  <h4>PVC laminate</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    Has a lustrous surface that enhances your modular kitchen.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/select-finish/pvc-laminate')}>
                    &#9432;
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.row} style={{ marginBottom: 12 }}>
              <div
                className={styles.choice}
                onClick={() => setActive("Anti-scratch Acrylic")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Anti-scratch Acrylic" ? styles.active : ""
                    }`}
                  />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Anti-scratch Acrylic</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    Is an elegant, reflective, glossy finish that is scratch
                    resistant.
                  </div>
                </div><div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/select-finish/anti-scratch-acrylic')}>
                    &#9432;
                  </span>
                </div>
              </div>
              <div
                className={styles.choice}
                onClick={() => setActive("Glossy PU")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Glossy PU" ? styles.active : ""
                    }`}
                  />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Glossy PU</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                    Comes with a slick look, high durability, and a polished
                    finish.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/select-finish/glossy-pu')}>
                    &#9432;
                  </span>
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

export default Estimater26;
