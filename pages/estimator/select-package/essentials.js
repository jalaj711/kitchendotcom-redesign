import React from "react";
import styles from "./styles_1316.module.scss";
import Button from "../../../components/Button/Button";
import Image1 from "../../../assets/Rectangle91.webp";
import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

const Estimator27 = () => {
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
          <h1 className={styles.est}> Kitchen Price Estimator Steps</h1>
        </div>
        <div className={styles.card}>
          <div className={styles.choices}>
            <div
              className={styles.selectionUnit}
              onClick={() => setActive("Essentials")}
            >
              <div>
                <span
                  className={`${styles.radio} ${
                    active === "Essentials" ? styles.active : ""
                  }`}
                ></span>
              </div>
              <div className={styles.primarySelection}>
                <h2>Essentials</h2>
                <span className={styles.res}>
                  A range that has the basic unit and accessories necessary for
                  a comfortable modular kitchen.
                </span>

                <img src={Image1.src} />

                <p className={styles.res}>
                  <b>PRO TIP: </b>If you&apos;re lookingfor a kitchen with the
                  necessary units for an easycooking time this is yours pick!{" "}
                </p>
              </div>
            </div>
            <div>
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
                  <p className={styles.p2}>
                    An exquisite kitchen with sleek fixtures, hardware, cabinets
                    & fittings for an elegant and smooth cooking experiences.
                  </p>
                </div>
                <div>
                  <span
                    style={{ color: "#F9C24E", cursor: "pointer" }}
                    onClick={() =>
                      router.push("/estimator/select-package/premium")
                    }
                  >
                    &#9432;
                  </span>
                </div>
              </div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("Luxe")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Luxe" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>Luxe</h3>
                  <p className={styles.p2}>
                    Lixurious dream kitchen that’s a fine blend of aesthetics
                    and high functionality complete with swanky units and
                    accessories.
                  </p>
                </div>
                <div>
                  <span
                    style={{ color: "#F9C24E", cursor: "pointer" }}
                    onClick={() =>
                      router.push("/estimator/select-package/luxe")
                    }
                  >
                    &#9432;
                  </span>
                </div>
              </div>
              <div
                className={styles.selectionUnit}
                onClick={() => setActive("Build your own")}
              >
                <div>
                  <span
                    className={`${styles.radio} ${
                      active === "Build your own" ? styles.active : ""
                    }`}
                  ></span>
                </div>
                <div>
                  <h3>Build your own</h3>
                  <p className={styles.p2}>
                    Select materials, finishes, accessories and more of your
                    choices from a range of collections for your kitchen.
                  </p>
                </div>
                <div>
                  <span
                    style={{ color: "#F9C24E", cursor: "pointer" }}
                    onClick={() =>
                      router.push("/estimator/select-package/build-your-own")
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
    </div>
  );
};

export default Estimator27;
