/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import LandingImage from "../../assets/design-gallery/landing.png";
import DesignGallery2 from "../../assets/design-gallery/2.png";
import Footer from "../../components/Footer/Footer";
import DoodlesEllipse from "../../components/DoodleDotsEllipse";
import ThreeTriangles from "../../components/ThreeTriangles";
import TwoSquares from "../../components/TwoSquares";
import LampImage from "../../assets/lamp.png";

export default function ContactUs() {
  return (
    <>
      <div className={styles.landing}>
        <h1>Project Gallery</h1>
        <h2>Design your kitchen instantly with us</h2>
        <div className={styles.lamps}>
          <img src={LampImage.src} />
          <img src={LampImage.src} />
          <img src={LampImage.src} />
        </div>
        <div className={styles.landingImage}>
          <div className={styles.imageWithSquare}>
            <DoodlesEllipse className={styles.doodleDot1} />
            <img src={LandingImage.src} />
            <DoodlesEllipse className={styles.doodleDot2} />
          </div>
        </div>

        <ThreeTriangles className={styles.triangle1} />
        <ThreeTriangles className={styles.triangle2} />
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
        <div className={styles.circle4} />
      </div>
      <div className={styles.container}>
        <div className={styles.half}>
          <h2>Creative Solutions by Professinal Designers.</h2>
          <p>
            We, at KitchenDotCom, seek to provide effective and sustainable
            solutions to our clients. The multi-usable units provided by us, are
            boon for those having space constraints. The special 3-D walkthrough
            provided by us gives the client to have an outlook of the kitchen
            before it is prepared. We provide you with detachable units that can
            be repaired and cleaned separately without altering the whole
            kitchen. Effective consultation at every step of designing
            eliminates any kind of mismatch between the clients&apos;
            expectations and the final outcome.
          </p>
        </div>
        <div className={styles.half2}>
          <div className={styles.imageWithSquare}>
            <DoodlesEllipse className={styles.doodleDot1} />
            <img src={DesignGallery2.src} />
            <DoodlesEllipse className={styles.doodleDot2} />
          </div>
        </div>
      </div>
      <div className={styles.kitchenLayout}>
        <h2>We&apos;ll let our clients do the talking</h2>
        <p>Here&apos;s what they have to say</p>
        <div className={styles.allCards}></div>

        <ThreeTriangles className={styles.triangle3} />
        <TwoSquares className={styles.square1} />
        <TwoSquares className={styles.square2} />
        <div className={styles.circle5} />
        <div className={styles.circle6} />
        <div className={styles.circle7} />
      </div>
      <Footer />
    </>
  );
}
