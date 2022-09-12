import React from 'react';
import styles from './styles.module.scss'
import DoodleDots from "../../components/DoodleDotsEllipse";
import TwoSquares from "../../components/TwoSquares";
import Image from '../../assets/Vector1.png'
import Image1 from '../../assets/Vector2.png'
const Estimater1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <DoodleDots className={styles.dots} />
        <h1 className={styles.est}>
          Estimate your Kitchen Price in a Few Simple Step
        </h1>

      </div>
      <div className={styles.box}>
        <div className={styles.vector}>
            <img className={styles.v1} src={Image.src}>

            </img>
            <img className={styles.v2} src={Image1.src}>
                
            </img>
        </div>
      </div>
    </div>
  );
}

export default Estimater1;
