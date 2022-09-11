import React from "react";
import Image from "../../assets/Rectangle213.jpg";
import Image1 from "../../assets/Rectangle252.jpg";
import styles from "./styles.module.scss";
import Image2 from "../../assets/Rectangle226.jpg";
import Background from "../../assets/MainBG.png";
import ThreeTriangles from "../../components/ThreeTriangles";
import DoodleDots from "../../components/DoodleDotsEllipse";
import TwoSquares from "../../components/TwoSquares";

const About = () => {
  return (
    <div className={styles.container}>
      <img className={styles.bgimg} src={Background.src}></img>

      <h1 className={styles.abt}>About Us</h1>
      <div className={styles.ourvision}>
        <div className={styles.paracontainer}>
          <h2 className={styles.vsn}>OUR VISION</h2>

          <p>
            <b>Our</b> vision is to be a reputable, sustainable, and desirable
            premier modular kitchen service provider of the global marketplace
            providing state-of-the-art innovative designs and superior quality
            finishing. We aim to be able to give our best services in each city.
            We seek to provide such services which make kitchen chores a
            hassle-free task. We are a one-stop solution to all your needs for a
            modular kitchen with all the updated features.
          </p>
        </div>
        <div className={styles.ddots}>
          <DoodleDots className={styles.dots} />
          <img className={styles.img1} src={Image.src}></img>
        </div>
      </div>
      <div className={styles.ourvision}>
        <div className={styles.ddots1}>
          <DoodleDots className={styles.dots1} />
          <img className={styles.img1} src={Image1.src}></img>
        </div>
        <div className={styles.paracontainer}>
          <h2 className={styles.vsn}>OUR MISSION</h2>

          <p>
            <b>Our</b> vision is to be a reputable, sustainable, and desirable
            premier modular kitchen service provider of the global marketplace
            providing state-of-the-art innovative designs and superior quality
            finishing. We aim to be able to give our best services in each city.
            We seek to provide such services which make kitchen chores a
            hassle-free task. We are a one-stop solution to all your needs for a
            modular kitchen with all the updated features.
          </p>
        </div>
      </div>
      <div className={styles.howstart}>
        <ThreeTriangles className={styles.triangles1} />
        <h2 className={styles.started}>HOW IT STARTED</h2>
        <p className={styles.started1}>
          Established in 2020, KitchenDotCom is a unit of Ideago Interiors. It
          aims to become a brand in the industry of modular kitchens. With more
          than 200 happy and satisfied clients so far, we wish to expand our
          client base in the whole country. Our work is creative as well as
          pocket-friendly. The designers and other workers at KitchenDotCom work
          together in a coordinated manner to achieve the common goal of the
          company. We are best known for our innovative designs and products,
          creative layouts for the kitchen, cooperative workforce for amazing
          customer service, our on-time delivery and our easy-to-maintain
          products. We keep on updating our products and services according to
          the invaluable feedback from our clients.
        </p>
      </div>
      <div className={styles.howstart}>
        <h2 className={styles.started}>DIRECTOR’S DESK</h2>
        <p className={styles.started1}>
          Our director Mr. Abhishek Gupta who is the creative mind behind this
          firm, has been leading it since its establishment in 2018. A man of
          great experience and owner of numerous artistic innovations has put in
          all his dedication for the growth of the company and its employees.
          His art works are famous worldwide, marking their presence in
          exhibitions across the seas. His artworks have always been praised by
          clients for telling a different story of their own. Ranging from
          Monochrome to Multichrome paintings , from still life to portrait
          paintings – he has proved his excellence in all dimensions of art. It
          is due to his invaluable leadership and efforts that the firm has been
          able to deliver the services to all the clients up to their
          satisfaction.
          <br />
          <br />
          We also offer an array of designs for tiles, compartments, chimneys,
          etc. We are a one-stop destination for material selection, products,
          fitting and installation, repairing ,etc.
        </p>
      </div>
      <div className={styles.drdots}>
        <DoodleDots className={styles.dots3} />
        <img className={styles.img2} src={Image2.src}></img>
        <h3 className={styles.he3}> Mr. Abhishek Gupta</h3>
        <div className={styles.square1}>
          <TwoSquares className={styles.squares} />
        </div>
      </div>

      <ThreeTriangles className={styles.triangles} />
      {/* <DoodleDots className={styles.dots} /> */}
      {/* <TwoSquares className={styles.squares} /> */}
      <div className={styles.circle1} />
      <div className={styles.circle2} />
      <div className={styles.circle3} />
    </div>
  );
};

export default About;
