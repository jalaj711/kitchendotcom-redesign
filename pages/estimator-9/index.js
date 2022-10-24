import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import Button from "../../components/Button/Button";
import UShapeKitchen from "../../assets/estimator/u-shape-dimension.svg";
import Input from "../../components/Input/Input";
import FetchFromApi from "../../utils/fetchFromApi";
import URLs from "../../utils/urls";
import { useRouter } from "next/router";

const Estimater2 = () => {
  const [currentDimensions, setCurrentDimensions] = useState({
    a_feet: 0,
    a_inches: 0,
    b_feet: 0,
    b_inches: 0,
    c_feet: 0,
    c_inches: 0,
  });
  const router = useRouter();

  const handleClick = () => {
    FetchFromApi.post(
      URLs.ESTIMATOR_8_11_SELECT_DIMENSIONS,
      currentDimensions
    ).then((res) => {
      if (res.status == 200) {
        return res.json().then((res) => {
          if (res.success) {
            router.push(res.next);
          }
        });
      }
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.backgroundCard}>
        <div className={styles.head}>
          <h1 className={styles.est}>Kitchen Price Estimator Steps</h1>
        </div>
        <div className={styles.card}>
          <h2>Now refer to your choosen layout here and add the measurment</h2>
          <div className={styles.kitchenTypeHolder}>
            <div className={styles.kitchenTypeCard}>
              <img src={UShapeKitchen.src} />
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
                  <tr>
                    <td>A</td>
                    <td>
                      <Input
                        type="number"
                        value={currentDimensions.a_feet}
                        onChange={(evt) =>
                          setCurrentDimensions({
                            ...currentDimensions,
                            a_feet: Number(evt.target.value),
                          })
                        }
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        value={currentDimensions.a_inches}
                        onChange={(evt) =>
                          setCurrentDimensions({
                            ...currentDimensions,
                            a_inches: Number(evt.target.value),
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>
                      <Input
                        type="number"
                        value={currentDimensions.b_feet}
                        onChange={(evt) =>
                          setCurrentDimensions({
                            ...currentDimensions,
                            b_feet: Number(evt.target.value),
                          })
                        }
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        value={currentDimensions.b_inches}
                        onChange={(evt) =>
                          setCurrentDimensions({
                            ...currentDimensions,
                            b_inches: Number(evt.target.value),
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>
                      <Input
                        type="number"
                        value={currentDimensions.c_feet}
                        onChange={(evt) =>
                          setCurrentDimensions({
                            ...currentDimensions,
                            c_feet: Number(evt.target.value),
                          })
                        }
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        value={currentDimensions.c_inches}
                        onChange={(evt) =>
                          setCurrentDimensions({
                            ...currentDimensions,
                            c_inches: Number(evt.target.value),
                          })
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <Button style={{ float: "left" }} secondary onClick={router.back}>
              Previous
            </Button>
            <Button style={{ float: "right" }} onClick={handleClick}>Next</Button>
          </div>
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
