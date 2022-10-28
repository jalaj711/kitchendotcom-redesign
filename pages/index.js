import styles from "./styles.module.scss";
import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Image1 from "../assets/Flipboard.png";
import Image2 from "../assets/Picture.png";
import Image3 from "../assets/Cost.png";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.container}>
        <Navbar className={styles.nav} />
        <div style={{ flexGrow: 1 }}></div>
        <div className={styles.head}>
          <h1 className={styles.head1}>
            We Help You To Make Best Design Modular Kitchen
          </h1>
          <div className={styles.button}>
            <button className={styles.enq} onClick={()=> router.push('/contact-us')}>ENQUIRY NOW</button>
            <buttom className={styles.more} onClick={()=> router.push('/project-gallery')}>Learn More</buttom>
          </div>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <div className={styles.div2}>
          <h1 className={styles.wec}>We can do for you</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.vectors}>
            <div className={styles.v1} onClick={()=>router.push('/project-gallery')}>
              <img className={styles.img1} src={Image1.src} />
              <h2>PROJECT GALLERY</h2>
              <p className={styles.p1}>
                Start an online interior design project today! Our Project
                Gallery. See some of the modern kitchen our clients have
                completed with their Decorist designers and our ongoing
                projects.
              </p>
            </div>
            <div className={styles.v1} onClick={()=>router.push('/design-gallery')}>
              <img className={styles.img2} src={Image2.src} />
              <h2 className={styles.head2}>DESIGN GALLERY</h2>
              <p className={styles.p2}>
                The Design Gallery at Kitchendotcom offers an elegantmodern
                kitchen. You&apos;ll also find our team of creative designers that
                are ready to help you transfor your kitchen into the perfect
                expression of your style. It&apos;s an interactive process where you
                tell us what look you want and we help make your (custom) vision
                a reality!
              </p>
            </div>
            <div className={styles.v1} onClick={()=>router.push('/estimator')}>
              <img className={styles.img3} src={Image3.src} />
              <h2 className={styles.head3}>Kitchen Price Estimator</h2>
              <p className={styles.p3}>
                Estimate the price of your modular kitchen in the most
                transparent way - it&apos;s simple, easy, and takes a few steps.
                Simply select the options that you would want for your kitchen
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
