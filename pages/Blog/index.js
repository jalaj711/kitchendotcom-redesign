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
      <div className={styles.container}>
        <img className={styles.main} src={image1.src} />
        <h1>BLOG</h1>
        <div className={styles.section1}>
          <img className={styles.image2} src={image2.src} />
          <div className={styles.v1}>
            <h2>
              Eget accumsan consequat arcu vitae. Non vulputate diam sed tortor.
            </h2>
            <p>
              Neque, sit sapien id viverra erat dignissim tellus nulla. Quis
              ornare commodo auctor facilisi sed malesuada volutpat, egestas
              dui. At ultricies nulla sed lectus natoque quam. Egestas in
              tellus.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.card}>
            <div className={styles.row1}>
              <div className={styles.b1}>
                <img className={styles.image3} src={image3.src} />
                <h4>ADMIN . 23 Aug 2021</h4>
                <h2>
                  Eget accumsan consequat arcu vitae. Non vulputate diam sed
                  tortor.
                </h2>
                <p>
                  Nunc hendrerit neque integer varius amet nisi dictum augue
                  malesuada. Leo suspendisse nibh feugiat at aliquam in leo.
                  Justo in mauris sit sit ullamcorper tristique sed et vitae.
                  Eget tellus augue risus nunc eu. Lorem massa id feugiat
                  iaculis sit convallis quis et.
                </p>
                <Button>Read More</Button>
              </div>
              <div className={styles.b1}>
                <img className={styles.image4} src={image4.src} />
                <h4>ADMIN . 23 Aug 2021</h4>
                <h2>
                  Eget accumsan consequat arcu vitae. Non vulputate diam sed
                  tortor.
                </h2>
                <p>
                  Nunc hendrerit neque integer varius amet nisi dictum augue
                  malesuada. Leo suspendisse nibh feugiat at aliquam in leo.
                  Justo in mauris sit sit ullamcorper tristique sed et vitae.
                  Eget tellus augue risus nunc eu. Lorem massa id feugiat
                  iaculis sit convallis quis et.
                </p>
                <Button>Read More</Button>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.b1}>
                <img className={styles.image3} src={image5.src} />
                <h4>ADMIN . 23 Aug 2021</h4>
                <h2>
                  Eget accumsan consequat arcu vitae. Non vulputate diam sed
                  tortor.
                </h2>
                <p>
                  Nunc hendrerit neque integer varius amet nisi dictum augue
                  malesuada. Leo suspendisse nibh feugiat at aliquam in leo.
                  Justo in mauris sit sit ullamcorper tristique sed et vitae.
                  Eget tellus augue risus nunc eu. Lorem massa id feugiat
                  iaculis sit convallis quis et.
                </p>
                <Button>Read More</Button>
              </div>
              <div className={styles.b1}>
                <img className={styles.image3} src={image6.src} />
                <h4>ADMIN . 23 Aug 2021</h4>
                <h2>
                  Eget accumsan consequat arcu vitae. Non vulputate diam sed
                  tortor.
                </h2>
                <p>
                  Nunc hendrerit neque integer varius amet nisi dictum augue
                  malesuada. Leo suspendisse nibh feugiat at aliquam in leo.
                  Justo in mauris sit sit ullamcorper tristique sed et vitae.
                  Eget tellus augue risus nunc eu. Lorem massa id feugiat
                  iaculis sit convallis quis et.
                </p>
                <Button>Read More</Button>
              </div>
            </div>
          </div>
          <div className={styles.news}>
            <div className={styles.box}>
              <h2>News</h2>
              <div className={styles.n1}>
                <img className={styles.image7} src={image7.src} />
                <div className={styles.para}>
                  <h3>7 Skills of Highly Effective Programmers</h3>
                  <p>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. We wanted to
                    provide our own take on the topic. Here are our seven skills
                    of effective programmers...
                  </p>
                </div>
              </div>
              <div className={styles.n1}>
                <img className={styles.image7} src={image7.src} />
                <div className={styles.para}>
                  <h3>7 Skills of Highly Effective Programmers</h3>
                  <p>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. We wanted to
                    provide our own take on the topic. Here are our seven skills
                    of effective programmers...
                  </p>
                </div>
              </div>
              <div className={styles.n1}>
                <img className={styles.image7} src={image7.src} />
                <div className={styles.para}>
                  <h3>7 Skills of Highly Effective Programmers</h3>
                  <p>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. We wanted to
                    provide our own take on the topic. Here are our seven skills
                    of effective programmers...
                  </p>
                </div>
              </div>
              <div className={styles.n1}>
                <img className={styles.image7} src={image7.src} />
                <div className={styles.para}>
                  <h3>7 Skills of Highly Effective Programmers</h3>
                  <p>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. We wanted to
                    provide our own take on the topic. Here are our seven skills
                    of effective programmers...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
