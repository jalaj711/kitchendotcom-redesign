import React, { useState } from "react";
import styles from "./styles.module.scss";
import ThreeTriangles from "../../components/ThreeTriangles";
import PrimaryImage from "../../assets/estimator/estimator-38.png";

const Estimater2 = () => {
  const [active, setActive] = useState(false);
  const data = [
    ["some field", "some entry here"],
    ["some field", "some entry here"],
    ["some field name", "entry here"],
    ["some field name", "entry here"],
    ["some field name here", "here "],
    ["some field name here", "here "],
  ];
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={PrimaryImage.src} />
        <h1>You are done and so are we!</h1>
        <h4>Your estimated modular kitchen cost:</h4>
        <div className={styles.startsFrom}>Starts from: ₹34,000</div>
        <div className={styles.summaryHolder}>
          {active && (
            <table>
              {data.map((elem, index) => (
                <tr key={index}>
                  <td>{elem[0]}</td>
                  <td>{elem[1]}</td>
                </tr>
              ))}
            </table>
          )}
        </div>
        <div className={styles.showSummary} onClick={() => setActive(!active)}>
          Show Summary {active ? "⌃" : "⌄"}
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
