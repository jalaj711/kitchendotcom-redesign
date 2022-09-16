import React from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import SVG from "../../assets/estimator-1.svg";
import Button from "../../components/Button/Button";
import LShapeKitchen from "../../assets/estimator/l-shape-kitchen.svg";
import ParallelShapeKitchen from "../../assets/estimator/parallel-shape-kitchen.svg";
import StraightShapeKitchen from "../../assets/estimator/straight-kitchen.svg";
import UShapeKitchen from "../../assets/estimator/u-shape-kitchen.svg";

const KitchenTypeCard = ({ image, name, isActive }) => {
  return (
    <div class={styles.kitchenTypeCard}>
      <div class={styles.imageHolder}>
        <span class={styles.activeHolder} />
        <img src={image} />
      </div>
      <div className={styles.textHolder}>{name}</div>
    </div>
  );
};

const Estimater2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.est}>Kitchen Price Estimator Step 2</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.kitchenTypeHolder}>
          {[
            { image: LShapeKitchen.src, name: "L - Shaped Design" },
            { image: UShapeKitchen.src, name: "U - Shaped Design" },
            { image: StraightShapeKitchen.src, name: "Straight Shaped Design" },
            { image: ParallelShapeKitchen.src, name: "Parallel Shaped Design" },
          ].map((elem, index) => (
            <KitchenTypeCard
              key={index}
              image={elem.image}
              name={elem.name}
              isActive={false}
            />
          ))}
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
