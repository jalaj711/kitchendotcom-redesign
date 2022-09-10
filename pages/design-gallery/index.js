import styles from "./styles.module.scss";
import LandingImage from "../../assets/design-gallery/landing.png";
import DesignGallery2 from "../../assets/design-gallery/2.png";
import DesignGallery3 from "../../assets/design-gallery/3.png";

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
        <h1>Design Gallery</h1>
        <h2>Discover your Modular Kitchen</h2>

        <div className={styles.landingImage}>
          <div className={styles.imageWithSquare}>
            <img src={LandingImage.src} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.half}>
          <h2>How our professional designeers work</h2>
          <p>
            The designers at KitcheDotCom hold expertise in their respective
            fields, and have immense experience of years of designing. They are
            firmly guided by the principles of “Coordination and Consultation” –
            Coordination among themselves and other workers, so as to come up
            with the best output and Consultation with the client to provide
            them the best of what they desire. Being in a creative profession
            for so many years, they come up with innovative designs every time,a
            step ahead always. Their immense creativity have gained them and
            their designs a firm foothold in the industry.
          </p>
        </div>
        <div className={styles.half}>
          <div className={styles.imageWithSquare}>
            <img src={DesignGallery2.src} />
          </div>
        </div>
      </div>
      <div className={styles.kitchenLayout}>
        <h2>Know your kitchen layout</h2>
        <p>
          Understanding a kitchen layout is the first step to planning a perfect
          kitchen. Your kitchen would have one of the following layouts.
        </p>
        <div className={styles.allCards}>
          <KitchenCard title="test" details="details" image={DesignGallery3.src} />
          <KitchenCard title="test" details="details" image={DesignGallery3.src} />
          <KitchenCard title="test" details="details" image={DesignGallery3.src} />
          <KitchenCard title="test" details="details" image={DesignGallery3.src} />
        </div>
      </div>
    </>
  );
}
