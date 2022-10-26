import React, { useState } from "react";
import styles from "./styles.module.scss";
import DoodleDots from "../../components/DoodleDotsEllipse";
import Image1 from "../../assets/Rectangle991.png";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import TwoSquares from "../../components/TwoSquaresTopRight";
import FetchFromApi from "../../utils/fetchFromApi";
import URLs from "../../utils/urls";
import { useRouter } from "next/router";

const Estimator13 = () => {
  const [active, setActive] = useState(-1);
  const router = useRouter();

  const handleClick = () => {
    var kitchenLayout;
    switch (active) {
      case 0:
        kitchenLayout = "Premium";
        break;
      case 1:
        kitchenLayout = "Essentials";
        break;
      case 2:
        kitchenLayout = "Luxe";
        break;
      case 3:
        kitchenLayout = "Build your own";
        break;
    }
    if (kitchenLayout) {
      FetchFromApi.post(URLs.ESTIMATOR_14, {
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
        <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.section}>
          <div className={styles.b0} onClick={() => setActive(0)}>
            <div>
              <span
                className={`${styles.radio} ${
                  active === 0 ? styles.radioActive : ""
                }`}
              ></span>
            </div>
            <div>
              <h2>Premium</h2>
              <p className={styles.ran}>
                An exquisite kitchen with sleek fixtures, hardware, cabinets &
                fittings for an elegant and smooth cooking experiences.
              </p>

              <img className={styles.img1} src={Image1.src} />

              <p className={styles.p1}>
                <b>PRO TIP: </b>Consider this if you’re looking for a exclusive
                accessories,cabinets and more to make your version of the
                masterchef kitchen.
              </p>
            </div>
          </div>

          <div className={styles.sec2}>
            <div className={styles.b1} onClick={() => setActive(1)}>
              <div>
                <span
                  className={`${styles.radio} ${
                    active === 1 ? styles.radioActive : ""
                  }`}
                ></span>
              </div>
              <div>
                <h3>Essentials</h3>
                <p className={styles.p2}>
                  A range that has the basic unit and accessories necessary for
                  a comfortable modular kitchen.
                </p>
              </div>
            </div>
            <div className={styles.b1} onClick={() => setActive(2)}>
              <div>
                <span
                  className={`${styles.radio} ${
                    active === 2 ? styles.radioActive : ""
                  }`}
                ></span>
              </div>
              <div>
                <h3>Luxe</h3>
                <p className={styles.p2}>
                  Lixurious dream kitchen that’s a fine blend of aesthetics and
                  high functionality complete with swanky units and accessories.
                </p>
              </div>
            </div>
            <div className={styles.b1} onClick={() => setActive(3)}>
              <div>
                <span
                  className={`${styles.radio} ${
                    active === 3 ? styles.radioActive : ""
                  }`}
                ></span>
              </div>
              <div>
                <h3>Build your own package</h3>
                <p className={styles.p2}>
                  Select materials, finishes, accessories and more of your
                  choices from a range of collections for your kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons1}>
          <Button secondary onClick={router.back}>
            Back
          </Button>
          <Button onClick={handleClick}>Next</Button>
        </div>
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

export default Estimator13;
