import React from "react";
import styles from "./styles_1821.module.scss";
import Image1 from "../../../assets/Rectangle393.webp";
import Button from "../../../components/Button/Button";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";
import TwoSquaresTopRight from "../../../components/TwoSquaresTopRight";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

const Estimator27 = () => {
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
          <h1 className={styles.est}> Kitchen Price Estimator Steps</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.choices}>
            <div
              className={styles.selectionUnit}
              onClick={() => setActive("MR Plywood")}
            >
              <div>
                <span
                  className={`${styles.radio} ${
                    active === "MR Plywood" ? styles.active : ""
                  }`}
                ></span>
              </div>
              <div className={styles.primarySelection}>
                <h2>MR Plywood</h2>
                <span>
                  Is moisture and termite resistant and does not wear off
                  easily.
                </span>

                <img src={Image1.src} />

                <p>
                  <b>PRO TIP: </b>Works well if you&apos;re on a budget and
                  looking for a durable material.
                </p>
              </div>
            </div>
            <div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("HDHMR")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "HDHMR" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>HDHMR</h3>
                  <p className={styles.p2}>
                    Has high strength and density, and a solid screw-holding
                    capacity.
                  </p>
                </div>
                <div>
                  <span
                    style={{ color: "#F9C24E", cursor: "pointer" }}
                    onClick={() =>
                      router.push("/estimator/build-package/hdhmr")
                    }
                  >
                    &#9432;
                  </span>
                </div>
              </div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("BWR Plywood")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "BWR Plywood" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>BWR Plywood</h3>
                  <p className={styles.p2}>
                    Is water resistant and works well in areas prone to water
                    exposure.
                  </p>
                </div>
                <div>
                  <span
                    style={{ color: "#F9C24E", cursor: "pointer" }}
                    onClick={() =>
                      router.push("/estimator/build-package/bwr-plywood")
                    }
                  >
                    &#9432;
                  </span>
                </div>
              </div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("BWP Plywood")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "BWP Plywood" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>BWP Plywood</h3>
                  <p className={styles.p2}>
                    Is waterproof and withstands prolonged exposure to water and
                    moisture.
                  </p>
                </div>
                <div>
                  <span
                    style={{ color: "#F9C24E", cursor: "pointer" }}
                    onClick={() =>
                      router.push("/estimator/build-package/bwp-plywood")
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
