/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import BG from "../../assets/project-gallery/bg.png";
import ChooseUs1 from "../../assets/project-gallery/ChooseUs1.png";
import ChooseUs2 from "../../assets/project-gallery/ChooseUs2.png";
import ChooseUs3 from "../../assets/project-gallery/ChooseUs3.png";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";

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
      <div className={styles.container}>
        <h1 className={styles.h1}>We have done some great work</h1>
        <Carousel
          images={[BG.src, ChooseUs1.src, ChooseUs2.src, ChooseUs3.src]}
        />
      </div>

      <div className={styles.container} style={{ backgroundColor: "#f3f3f3" }}>
        <h1 className={styles.h1}>
          Creative Solutions by Professinal Designers.
        </h1>
        <p>
          We, at KitchenDotCom, seek to provide effective and sustainable
          solutions to our clients. The multi-usable units provided by us, are
          boon for those having space constraints. The special 3-D walkthrough
          provided by us gives the client to have an outlook of the kitchen
          before it is prepared. We provide you with detachable units that can
          be repaired and cleaned separately without altering the whole kitchen.
          Effective consultation at every step of designing eliminates any kind
          of mismatch between the clients&apos; expectations and the final outcome.
        </p>
        <Carousel
          images={[BG.src, ChooseUs1.src, ChooseUs2.src, ChooseUs3.src]}
        />
      </div>
      <div className={styles.container}>
        <h1 className={styles.h1}>We&apos;ll let our clients do the talking</h1>
        <p>
        Here&apos;s what they have to say
        </p>
        <Carousel
          images={[BG.src, ChooseUs1.src, ChooseUs2.src, ChooseUs3.src]}
        />
      </div>
      <Footer />
    </>
  );
}
