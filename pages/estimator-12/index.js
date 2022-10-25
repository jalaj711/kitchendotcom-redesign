import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
// import Input from "../../components/Input/Input";
import TwoSquares from "../../components/TwoSquares";
import FetchFromApi from "../../utils/fetchFromApi";
import URLs from "../../utils/urls";
import { useRouter } from "next/router";

const Estimater2 = () => {
  const [active, setActive] = useState(-1);
  const router = useRouter();

  const handleClick = () => {
    var kitchenLayout;
    switch (active) {
      case 0:
        kitchenLayout = "Essentials";
        break;
      case 1:
        kitchenLayout = "Premium";
        break;
      case 2:
        kitchenLayout = "Luxe";
        break;
      case 3:
        kitchenLayout = "Build your own";
        break;
    }
    if (kitchenLayout) {
      FetchFromApi.post(URLs.ESTIMATOR_12, {
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
      <div className={styles.head}>
        <h1 className={styles.est}>Kitchen Price Estimate Steps</h1>
      </div>
      <div className={styles.card}>
        <h2>What kind of modular kitchen package would you prefer? </h2>
        <div className={styles.kitchenTypeHolder}>
          <div className={styles.row}>
            <div className={styles.choice} onClick={() => setActive(0)}>
              <div>
                <span
                  className={`${styles.radio} ${
                    active === 0 ? styles.radioActive : ""
                  }`}
                />
              </div>
              <div className={styles.choiceContent}>
                <h4>Essentials</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  A range that has the basic unit and accessories necessary for
                  a comfortable modular kitchen.
                </div>
              </div>
            </div>
            <div className={styles.choice} onClick={() => setActive(1)}>
              <div>
                <span
                  className={`${styles.radio} ${
                    active === 1 ? styles.radioActive : ""
                  }`}
                />
              </div>
              <div className={styles.choiceContent}>
                <h4>Premium</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  An exquisite kitchen with sleek fixtures, hardware, cabinets &
                  fittings for an elegant and smooth cooking experiences.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row} style={{ marginBottom: 12 }}>
            <div className={styles.choice} onClick={() => setActive(2)}>
              <div>
                <span
                  className={`${styles.radio} ${
                    active === 2 ? styles.radioActive : ""
                  }`}
                />
              </div>
              <div className={styles.choiceContent}>
                <h4>Luxe</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Lixurious dream kitchen that’s a fine blend of aesthetics and
                  high functionality complete with swanky units and accessories.
                </div>
              </div>
            </div>
            <div className={styles.choice} onClick={() => setActive(3)}>
              <div>
                <span
                  className={`${styles.radio} ${
                    active === 3 ? styles.radioActive : ""
                  }`}
                />
              </div>
              <div className={styles.choiceContent}>
                <h4>Build your own package</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Select materials, finishes, accessories and more of your
                  choices from a range of collections for your kitchen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button secondary onClick={router.back}>
          Back
        </Button>
        <Button onClick={handleClick}>Next</Button>
      </div>

      <div className={styles.decoratives}>
        <TwoSquares
          style={{ top: "70%", left: "-25vw", width: "max(150px, 50vw)" }}
        />
        <TwoSquares
          style={{
            top: "30%",
            right: "min(-50px, -25vw)",
            width: "max(150px, 50vw)",
          }}
        />
        <span style={{ top: "0%", left: "0%" }} className={styles.circle} />
        <span style={{ top: "40%", left: "15%" }} className={styles.circle} />
        <span style={{ top: "0%", left: "65%" }} className={styles.circle} />
        <span style={{ top: "20%", left: "100%" }} className={styles.circle} />
        <span style={{ top: "40%", left: "100%" }} className={styles.circle} />
      </div>
    </div>
  );
};

export default Estimater2;
