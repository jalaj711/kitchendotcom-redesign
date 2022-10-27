import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TwoSquares from "../../components/TwoSquaresTopRight";
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
         kitchenLayout = "HDHMR";
         break;
       case 1:
         kitchenLayout = "MR Plywood";
         break;
       case 2:
         kitchenLayout = "BWR Plywood";
         break;
       case 3:
         kitchenLayout = "BWP Plywood";
         break;
     }
     if (kitchenLayout) {
       FetchFromApi.post(URLs.ESTIMATOR_17, {
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
        <h2>Now refer to your choosen layout here and add the measurment </h2>
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
                <h4>HDHMR</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Has high strength and density, and a solid screw-holding
                  capacity.
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
                <h4>MR Plywood</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is moisture and termite resistant and does not wear off
                  easily.
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
                <h4>BWR Plywood</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is water resistant and works well in areas prone to water
                  exposure.
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
                <h4>BWP Plywood</h4>
                <div style={{ marginTop: 8, color: "#4a4a4a" }}>
                  Is waterproof and withstands prolonged exposure to water and
                  moisture.
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
          style={{ top: "90%", left: "-22vw", width: "max(150px, 50vw)" }}
        />
        <TwoSquares
          style={{
            top: "-4%",
            right: "min(-50px, -20vw)",
            width: "max(150px, 50vw)",
          }}
        />
      </div>
    </div>
  );
};

export default Estimater2;
