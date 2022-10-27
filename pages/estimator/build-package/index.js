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
      FetchFromApi.post(URLs.ESTIMATOR_18_21_BUILD_PACKAGE, {
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
              <div className={styles.choice} onClick={() => setActive("HDHMR")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "HDHMR" ? styles.active : ""
                    }`} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>HDHMR</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Has high strength and density, and a solid screw-holding
                  capacity.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/build-package/hdhmr')}>
                    &#9432;
                  </span>
                </div>
              </div>
              <div className={styles.choice} onClick={() => setActive("MR Plywood")}>
                <div>
                  <span className={`${styles.radio} ${
                      active === "MR Plywood" ? styles.active : ""
                    }`} />
                </div>
                <div className={styles.choiceContent}>
                  
                  <h4>MR Plywood</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is moisture and termite resistant and does not wear off
                  easily.
                  </div>
                </div>

                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/build-package/mr-plywood')}>
                    &#9432;
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.row} style={{ marginBottom: 12 }}>
              <div className={styles.choice} onClick={() => setActive("BWR Plywwod")}>
                <div>
                  <span className={`${styles.radio} ${
                      active === "BWR Plywwod" ? styles.active : ""
                    }`} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>BWR Plywwod</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is water resistant and works well in areas prone to water
                  exposure.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/build-package/bwr-plywood')}>
                    &#9432;
                  </span>
                </div>
              </div>
              <div className={styles.choice} onClick={() => setActive("BWP Plywood")}>
                <div>
                  <span className={`${styles.radio} ${
                      active === "BWP Plywood" ? styles.active : ""
                    }`} />
                </div>
                <div className={styles.choiceContent}>
                  <h4>BWP Plywood</h4>
                  <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is waterproof and withstands prolonged exposure to water and
                  moisture.
                  </div>
                </div>
                <div>
                  <span style={{ color: "#F9C24E", cursor: "pointer" }} onClick={()=>router.push('/estimator/build-package/bwp-plywood')}>
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
