/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import DesignGallery2 from "../../assets/design-gallery/2.png";
import DesignGallery3 from "../../assets/design-gallery/3.png";
import DesignGallery4 from "../../assets/design-gallery/4.jpeg";
import DesignGallery5 from "../../assets/design-gallery/5.jpeg";
import DesignGallery6 from "../../assets/design-gallery/6.jpeg";
import BG from "../../assets/design-gallery/top-bg.png";
import Footer from "../../components/Footer/Footer";
import Carousel from "./Carousel";
import NavBar from "../../components/NavBar/NavBar";

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

export default function DesignGallery() {
  return (
    <>
    <NavBar />
      <div className={styles.landing}>
        <img src={BG.src} id="page-bg" />
        <div>
          <h1>Design Gallery</h1>
          <h2>Discover your Modular Kitchen</h2>
        </div>
      </div>
      <div className={styles.container}>
        <h1>How our professional designeers work</h1>
        <p>
          The designers at KitcheDotCom hold expertise in their respective
          fields, and have immense experience of years of designing. They are
          firmly guided by the principles of “Coordination and Consultation” –
          Coordination among themselves and other workers, so as to come up with
          the best output and Consultation with the client to provide them the
          best of what they desire. Being in a creative profession for so many
          years, they come up with innovative designs every time,a step ahead
          always. Their immense creativity have gained them and their designs a
          firm foothold in the industry.
        </p>
        <img src={DesignGallery2.src} className={styles.imageWithSquare} />
      </div>
      <div className={styles.kitchenLayout}>
        <h2>Know your kitchen layout</h2>
        <p>
          Understanding a kitchen layout is the first step to planning a perfect
          kitchen. Your kitchen would have one of the following layouts.
        </p>
        <div className={styles.allCards}>
          <KitchenCard
            title="L-Shape Kitchen"
            details="Enim gravida fames viverra tincidunt. Neque neque."
            image={DesignGallery3.src}
          />
          <KitchenCard
            title="Straight Shape Kitchen"
            details="Enim gravida fames viverra tincidunt. Neque neque."
            image={DesignGallery4.src}
          />
          <KitchenCard
            title="U- Shape Kitchen"
            details="Enim gravida fames viverra tincidunt. Neque neque."
            image={DesignGallery5.src}
          />
          <KitchenCard
            title="Parallel Shape Kitchen"
            details="Enim gravida fames viverra tincidunt. Neque neque."
            image={DesignGallery6.src}
          />
        </div>
        <div>
          <h2>Some color combinations</h2>
          <Carousel />
        </div>
      </div>
      <Footer />
    </>
  );
}
