import React from "react";
import styles from "./styles32_34.module.scss";
import Image1 from "../../../assets/estimator/32.webp";
import Button from "../../../components/Button/Button";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const Estimator27 = () => {
  const [active, setActive] = React.useState("");
  const router = useRouter();
  const handleClick = () => {
    var accessories = active;
    if (accessories) {
      FetchFromApi.post(URLs.ESTIMATOR_31_34_SELECT_ACCESSORIES, {
        accessories,
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
          <h1 className={styles.est}> Kitchen Price Estimate Steps</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.choices}>
            <div
              className={styles.selectionUnit}
              onClick={() => setActive("Basic")}
            >
              <div>
                <span
                  className={`${styles.radio} ${
                    active === "Basic" ? styles.active : ""
                  }`}
                ></span>
              </div>
              <div className={styles.primarySelection}>
                <h2>Basic</h2>
                <span>
                  A basic range of accessories usually required to get your
                  ideal kitchen started.
                </span>
                <img src={Image1.src} />
                <p>
                  <b>Pro Tip: </b>Consider this if you need basic units within a
                  budget for a comfortable cooking experience.
                </p>
              </div>
            </div>
            <div className={styles.rightChoices}>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("Intermediate")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Intermediate" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>Intermediate</h3>
                  <p>
                    A fine range of fittings, cabinets, and more for a smooth
                    culinary experience.
                  </p>
                </div>
                <div>
                  <span
                    style={{ color: "#F9C24E", cursor: "pointer" }}
                    onClick={() =>
                      router.push("/estimator/select-accessories/intermediate")
                    }
                  >
                    &#9432;
                  </span>
                </div>
              </div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("Premium")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Premium" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>Premium</h3>
                  <p>
                    A showstopper kitchen with an exclusive range you were
                    always looking for.
                  </p>
                </div>
                <div>
                  <span
                    style={{ color: "#F9C24E", cursor: "pointer" }}
                    onClick={() =>
                      router.push("/estimator/select-accessories/premium")
                    }
                  >
                    &#9432;
                  </span>
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
      </div>
      <TwoSquaresTopRight className={styles.square1} />
      <TwoSquaresBottomLeft className={styles.square2} />
    </div>
  );
};

export default Estimator27;
