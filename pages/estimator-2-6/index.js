import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import LShapeKitchen from "../../assets/estimator/l-shape-kitchen.svg";
import ParallelShapeKitchen from "../../assets/estimator/parallel-shape-kitchen.svg";
import StraightShapeKitchen from "../../assets/estimator/straight-kitchen.svg";
import UShapeKitchen from "../../assets/estimator/u-shape-kitchen.svg";

const KitchenTypeCard = ({ image, name, isActive, onClick }) => {
  return (
    <div
      className={styles.kitchenTypeCard}
      onClick={onClick}
      style={isActive ? { boxShadow: "0px 8px 12px #f9c24e" } : {}}
    >
      <div className={styles.imageHolder}>
        <span
          className={
            isActive ? styles.selectedHolder : styles.notSelectedHolder
          }
        />
        <img src={image} />
      </div>
      <div className={styles.textHolder}>{name}</div>
    </div>
  );
};

const Estimater2 = () => {
  const [active, setActive] = useState(-1);
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.est}>Kitchen Price Estimator Step 2</h1>
      </div>
      <div className={styles.card}>
        <div className={styles.kitchenTypeHolder}>
          <div className={styles.kitchenTypeHolderRow}>
          <KitchenTypeCard
            image={LShapeKitchen.src}
            name="L - Shaped Design"
            isActive={active === 0}
            onClick={() => setActive(0)}
          />
          <KitchenTypeCard
            image={UShapeKitchen.src}
            name={"U - Shaped Design"}
            isActive={active === 1}
            onClick={() => setActive(1)}
          />
          </div>
          <div className={styles.kitchenTypeHolderRow}>
          <KitchenTypeCard
            image={StraightShapeKitchen.src}
            name="Straight Shaped Design"
            isActive={active === 2}
            onClick={() => setActive(2)}
          />
          <KitchenTypeCard
            image={ParallelShapeKitchen.src}
            name={"Parallel Shaped Design"}
            isActive={active === 3}
            onClick={() => setActive(3)}
          />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button secondary>Back</Button>
        <Button>Next</Button>
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
