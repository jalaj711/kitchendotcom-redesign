import React from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const Estimator12 = () => {
  const [active, setActive] = React.useState("");
  const router = useRouter();
  const handleClick = () => {
    var selection = active;
    if (selection) {
      FetchFromApi.post(URLs.ESTIMATOR_12_16_SELECT_PACKAGE, {
        package: selection,
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
              <div className={styles.choice} onClick={() => setActive("Essentials")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Essentials" ? styles.active : ""
                    }`} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Essentials</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  A range that has the basic unit and accessories necessary for
                  a comfortable modular kitchen.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/select-package/essentials')}>
                    &#9432;
                  </span>
                </div>
              </div>
              <div className={styles.choice} onClick={() => setActive("Premium")}>
                <div>
                  <span className={`${styles.radio} ${
                      active === "Premium" ? styles.active : ""
                    }`} />
                </div>
                <div className={styles.choiceContent}>
                  
                  <h4>Premium</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  An exquisite kitchen with sleek fixtures, hardware, cabinets &
                  fittings for an elegant and smooth cooking experiences.
                  </div>
                </div>

                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/select-package/premium')}>
                    &#9432;
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.row} style={{ marginBottom: 12 }}>
              <div className={styles.choice} onClick={() => setActive("Luxe")}>
                <div>
                  <span className={`${styles.radio} ${
                      active === "Luxe" ? styles.active : ""
                    }`} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Luxe</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Luxurious dream kitchen that&apos;s a fine blend of aesthetics and
                  high functionality complete with swanky units and accessories.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/select-package/luxe')}>
                    &#9432;
                  </span>
                </div>
              </div>
              <div className={styles.choice} onClick={() => setActive("Build your own")}>
                <div>
                  <span className={`${styles.radio} ${
                      active === "Build your own" ? styles.active : ""
                    }`} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>Build your own</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Select materials, finishes, accessories and more of your
                  choices from a range of collections for your kitchen.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/select-package/build-your-own')}>
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

export default Estimator12;
