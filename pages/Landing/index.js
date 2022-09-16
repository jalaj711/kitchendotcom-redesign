import styles from "./styles.module.scss";
import React from "react";
import Image from "../../assets/Group1.png";
import Navbar from "../../components/NavBar/NavBar";
import Image1 from "../../assets/Flipboard.png";

const Landing = () => {
  return (
    <>
      <Navbar className={styles.nav} />
      <div className={styles.container}>
        <div className={styles.head}>
          <h1 className={styles.head1}>
            We Help You To Make Best Design Modular Kitchen
          </h1>
          <div className={styles.button}>
            <button className={styles.enq}>ENQUIRY NOW</button>
            <buttom className={styles.more}>Learn More</buttom>
          </div>
        </div>
        <div className={styles.div2}>
          <h1 className={styles.wec}>We can do for you</h1>
          <div className={styles.vectors}>
            <div className={styles.v1}>
              <img  className={styles.img1} src={Image1.src} />
              <p className={styles.p1}>
                <h2 >DESIGN GALLERY</h2>
                Start an online interior design project today! Our Project
                Gallery. See some of the modern kitchen our clients have
                completed with their Decorist designers and our ongoing
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
