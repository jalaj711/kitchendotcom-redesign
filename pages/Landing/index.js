import styles from "./styles.module.scss";
import React from "react";
import Image from "../../assets/LandingBG.png";
import Navbar from "../../components/NavBar/NavBar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.img} src={Image.src}>
          <div className={styles.head}>
            <h1 className={styles.head1}>
              We Help You To Make Best Design Modular Kitchen
            </h1>
            <div className={styles.button}>
              <button className={styles.enq}>ENQUIRY NOW</button>
              <buttom className={styles.more}>Learn More</buttom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
