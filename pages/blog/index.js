import React from "react";
import styles from "./styles.module.scss";
import image1 from "../../assets/blog1.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import image2 from "../../assets/blog2.png";
import image3 from "../../assets/blog3.png";
import image4 from "../../assets/blog4.png";
import image5 from "../../assets/blog5.png";
import image6 from "../../assets/blog6.png";
import image7 from "../../assets/blog7.png";
import Button from "../../components/Button/Button";

const index = () => {
  return (
    <>
      <Navbar />
      <div className={styles.top}>
        <img src={image1.src} className={styles.bg} alt="bg" />
        <div className={styles.title}>
          <h1>Blog</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.primary}>
          <img className={styles.image2} src={image2.src} />
          <div className={styles.primaryContent}>
            <div>
              <span className={styles.blogWriter}>ADMIN</span>
              <span className={styles.blogDate}>1 day ago</span>
            </div>
            <h2 className={styles.blogTitle}>
              Eget accumsan consequat arcu vitae. Non vulputate diam sed tortor.
            </h2>
            <p className={styles.blogContent}>
              Neque, sit sapien id viverra erat dignissim tellus nulla. Quis
              ornare commodo auctor facilisi sed malesuada volutpat, egestas
              dui. At ultricies nulla sed lectus natoque quam. Egestas in
              tellus.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className={styles.blogsAndNews}>
          <div className={styles.blogs}>
            <div className={styles.blogCard}>
              <img className={styles.image2} src={image2.src} />
              <div className={styles.blogCardContent}>
                <div>
                  <span className={styles.blogWriter}>ADMIN</span>
                  <span className={styles.blogDate}>1 day ago</span>
                </div>
                <h2 className={styles.blogTitle}>
                  Eget accumsan consequat arcu vitae. Non vulputate diam sed
                  tortor.
                </h2>
                <p className={styles.blogContent}>
                  Neque, sit sapien id viverra erat dignissim tellus nulla. Quis
                  ornare commodo auctor facilisi sed malesuada volutpat, egestas
                  dui. At ultricies nulla sed lectus natoque quam. Egestas in
                  tellus.
                </p>
                <Button>Read More</Button>
              </div>
            </div>
            <div className={styles.blogCard}>
              <img className={styles.image2} src={image2.src} />
              <div className={styles.blogCardContent}>
                <div>
                  <span className={styles.blogWriter}>ADMIN</span>
                  <span className={styles.blogDate}>1 day ago</span>
                </div>
                <h2 className={styles.blogTitle}>
                  Eget accumsan consequat arcu vitae. Non vulputate diam sed
                  tortor.
                </h2>
                <p className={styles.blogContent}>
                  Neque, sit sapien id viverra erat dignissim tellus nulla. Quis
                  ornare commodo auctor facilisi sed malesuada volutpat, egestas
                  dui. At ultricies nulla sed lectus natoque quam. Egestas in
                  tellus.
                </p>
                <Button>Read More</Button>
              </div>
            </div>
            <div className={styles.blogCard}>
              <img className={styles.image2} src={image2.src} />
              <div className={styles.blogCardContent}>
                <div>
                  <span className={styles.blogWriter}>ADMIN</span>
                  <span className={styles.blogDate}>1 day ago</span>
                </div>
                <h2 className={styles.blogTitle}>
                  Eget accumsan consequat arcu vitae. Non vulputate diam sed
                  tortor.
                </h2>
                <p className={styles.blogContent}>
                  Neque, sit sapien id viverra erat dignissim tellus nulla. Quis
                  ornare commodo auctor facilisi sed malesuada volutpat, egestas
                  dui. At ultricies nulla sed lectus natoque quam. Egestas in
                  tellus.
                </p>
                <Button>Read More</Button>
              </div>
            </div>
          </div>
          <div className={styles.news}>
            <div className={styles.box}>
              <h2>News</h2>
              <i style={{ color: "#ccc" }}>News section coming soon</i>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
