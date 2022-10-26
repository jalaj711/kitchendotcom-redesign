import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/Button/Button";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";
import LShapeKitchen from "../../../assets/estimator/l-shape-kitchen.svg";
import ParallelShapeKitchen from "../../../assets/estimator/parallel-shape-kitchen.svg";
import StraightShapeKitchen from "../../../assets/estimator/straight-kitchen.svg";
import UShapeKitchen from "../../../assets/estimator/u-shape-kitchen.svg";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const KitchenTypeCard = ({ image, name, isActive, onClick }) => {
  return (
    <div
      className={styles.kitchenTypeCard}
      onClick={onClick}
      style={
        isActive
          ? { boxShadow: "0px 8px 12px #f9c24e", border: "3px solid #f9c24e" }
          : {}
      }
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
  const router = useRouter();

  const handleClick = () => {
    var kitchenLayout;
    switch (active) {
      case 0:
        kitchenLayout = "L-Shaped";
        break;
      case 1:
        kitchenLayout = "Straight";
        break;
      case 2:
        kitchenLayout = "U-Shaped";
        break;
      case 3:
        kitchenLayout = "Parallel";
        break;
    }
    if (kitchenLayout) {
      FetchFromApi.post(URLs.ESTIMATOR_2_6_SELECT_LAYOUT, {
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
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Steps</h1>
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
        {/* <div >
          <Button secondary onClick={router.back}>Back</Button>
          <Button onClick={handleClick}>Next</Button>
        </div> */}
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
