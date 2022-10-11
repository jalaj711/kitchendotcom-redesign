/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import BG from "../../assets/project-gallery/bg.png";
import ChooseUs1 from "../../assets/project-gallery/ChooseUs1.png";
import ChooseUs2 from "../../assets/project-gallery/ChooseUs2.png";
import ChooseUs3 from "../../assets/project-gallery/ChooseUs3.png";
import Footer from "../../components/Footer/Footer";

function KitchenCard({ title, image, details }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} />
      </div>
      <div className={styles.text}>
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <>
      <div className={styles.landing}>
        <img src={BG.src} />
        <div>
          <h1 className={styles.h1}>Project Gallery</h1>
          <h2 className={styles.h2}>Design Your Kitchen Instantly with us.</h2>
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.h1}>Why Choose Us?</h1>
        <div className={styles.chooseUsHolder}>
          <div className={styles.chooseUsCard}>
            <img src={ChooseUs1.src} />
            <div className={styles.chooseUsTitle}>10</div>
            <div className={styles.chooseUsCaption}>Years of experience</div>
          </div>
          <div className={styles.chooseUsCard}>
            <img src={ChooseUs2.src} />
            <div className={styles.chooseUsTitle}>295</div>
            <div className={styles.chooseUsCaption}>Property Built</div>
          </div>
          <div className={styles.chooseUsCard}>
            <img src={ChooseUs3.src} />
            <div className={styles.chooseUsTitle}>15</div>
            <div className={styles.chooseUsCaption}>Award Wins</div>
          </div>
        </div>  
      </div>
      <Footer />
    </>
  );
}
