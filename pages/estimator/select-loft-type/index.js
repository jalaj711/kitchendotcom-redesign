import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const Estimater2 = () => {
  const [active, setActive] = React.useState("");
  const router = useRouter();
  const handleClick = () => {
    var loft;
    switch (active) {
      case "custom":
        loft = Number(document.getElementById("loft-length").value);
        break;
      case "2":
        loft = 2;
        break;
      case "0":
        loft = 0;
        break;
    }
    if (active) {
      FetchFromApi.post(URLs.ESTIMATOR_25_SELECT_LOFT, {
        loft,
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
          <h2>Which type of loft are you looking for?</h2>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.row}>
              <div
                className={styles.choice}
                onClick={() => setActive("custom")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "custom" ? styles.active : ""
                    }`}
                  />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Customized loft</h4>
                  <div style={{ marginTop: 8 }}>
                    <span>Feet: </span>
                    <Input
                      type="number"
                      small
                      border
                      placeholder={3}
                      id="loft-length"
                      disabled={active !== "custom"}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.choice} onClick={() => setActive("2")}>
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "2" ? styles.active : ""
                    }`}
                  />
                </div>
                <div className={styles.choiceContent}>
                  <h4>2 feet loft</h4>
                  <div style={{ marginTop: 8 }}>(Recommended)</div>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.choice} onClick={() => setActive("0")}>
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "0" ? styles.active : ""
                    }`}
                  />
                </div>
                <div className={styles.choiceContent}>
                  <h4>No loft</h4>
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
