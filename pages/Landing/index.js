import styles from './styles.module.scss'
import React from 'react';
import Image from '../../assets/LandingBG.png'

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img className={styles.Landing} src={Image.src}></img>
      </div>
      <div className={styles.heading}>
        <h1 className={styles.head1}>
          We Help You To Make Best Design Modular Kitchen
        </h1>
      </div>
    </div>
  );
}

export default Landing;
