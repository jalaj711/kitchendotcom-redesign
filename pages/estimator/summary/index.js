import React, { useState } from "react";
import styles from "./styles.module.scss";
import PrimaryImage from "../../../assets/estimator/38.png";
import TwoSquaresBottomLeft from "../../../components/TwoSquaresBottomLeft";

import FetchFromApi from "../../../utils/fetchFromApi";
import URLs from "../../../utils/urls";
import { useRouter } from "next/router";

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
      <div className={styles.top}>
        <img src={PrimaryImage.src} className={styles.bg} alt="bg" />
      </div>
      <div className={styles.wrapper}>
        <h1>You are done and so are we!</h1>
        <h4>Your estimated modular kitchen cost:</h4>
        <div className={styles.startsFrom}>Starts from: ₹34,000</div>
        <div className={styles.summaryHolder}>
          {active && (
            <table>
              {data.map((elem, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "left" }}>{elem[0]}</td>
                  <td style={{ textAlign: "right", fontWeight: 400 }}>
                    {elem[1]}
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
        <div className={styles.showSummary} onClick={() => setActive(!active)}>
          {active ? <>Hide Summary &#x25B2;</> : <>Show Summary &#x25BC;</>}
        </div>
      </div>
      <TwoSquaresBottomLeft className={styles.square2} />
    </div>
  );
};

export default Estimater2;
