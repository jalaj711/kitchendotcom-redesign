import React from "react";
import styles from "./styles.module.scss";
import SVG from "../../assets/estimator/estimator-1.svg";
import SVGSmall from "../../assets/estimator/estimator-1-small.svg";
import Button from "../../components/Button/Button";
import BG from "../../assets/estimator/estimator-1-bg.png"
import { useRouter } from "next/router";

const Estimater1 = () => {
  const router = useRouter()
  return (
    <div className={styles.container} style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BG.src})`}}>
      <div className={styles.head}>
        <h1 className={styles.est}>
          Estimate your Kitchen Price in a Few Simple Step
        </h1>
      </div>
      <div className={styles.card}>
        <img src={SVG.src} className={styles.imageBig} />
        <img src={SVGSmall.src} className={styles.imageSmall} />
        <Button onClick={() => router.push('/estimator-2-6')}>Next</Button>
      </div>
    </div>
  );
};

export default Estimater1;
