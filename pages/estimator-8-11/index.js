import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import LShapeKitchen from "../../assets/estimator/l-shape-dimension.svg";
import ParallelShapeKitchen from "../../assets/estimator/parallel-dimension.svg";
import StraightShapeKitchen from "../../assets/estimator/straight-dimension.svg";
import UShapeKitchen from "../../assets/estimator/u-shape-dimension.svg";
import Input from "../../components/Input/Input";

const Estimater2 = () => {
  const [currentDesign, setCurrentDesign] = useState(3);
  const dimensions = [
    { image: LShapeKitchen.src, dimensions: ["A", "B"] },
    { image: UShapeKitchen.src, dimensions: ["A", "B", "C"] },
    { image: StraightShapeKitchen.src, dimensions: ["A"] },
    { image: ParallelShapeKitchen.src, dimensions: ["A", "B"] },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.est}>Kitchen Price Estimator Step 2</h1>
      </div>
      <div className={styles.card}>
        <h2>Now refer to your choosen layout here and add the measurment</h2>
        <div className={styles.kitchenTypeHolder}>
          <div className={styles.kitchenTypeCard}>
            <img src={dimensions[currentDesign].image} />
          </div>
          <div className={styles.dimensions}>
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>Feet</td>
                  <td>Inches</td>
                </tr>
              </thead>
              <tbody>
                {dimensions[currentDesign].dimensions.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem}</td>
                    <td>
                      <Input type="number" key={index} />
                    </td>
                    <td>
                      <Input type="number" key={index} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <Button style={{ float: "left" }}>Previous</Button>
          <Button style={{ float: "right" }}>Next</Button>
        </div>
      </div>

      <div className={styles.decoratives}>
        <ThreeTriangles
          style={{ top: "70%", left: "-25vw", width: "max(150px, 50vw)" }}
        />
        <ThreeTriangles
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
