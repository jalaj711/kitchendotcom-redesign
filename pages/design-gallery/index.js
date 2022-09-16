/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import LandingImage from "../../assets/design-gallery/landing.png";
import DesignGallery2 from "../../assets/design-gallery/2.png";
import DesignGallery3 from "../../assets/design-gallery/3.png";
import DesignGallery4 from "../../assets/design-gallery/4.jpeg";
import DesignGallery5 from "../../assets/design-gallery/5.jpeg";
import DesignGallery6 from "../../assets/design-gallery/6.jpeg";
import DoodlesEllipse from "../../components/DoodleDotsEllipse";
import ThreeTriangles from "../../components/ThreeTriangles";
import TwoSquares from "../../components/TwoSquares";
import LampImage from "../../assets/lamp.png";
import ColorPalettes from "./color-palettes.json";

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

function ColorDesignsElement({ image, colors }) {
  return (
    <div className={styles.colorDesignCard}>
      <img src={image} />
      <h4>Color Palette</h4>
      <div>
        {colors.map((elem, index) => (
          <span
            key={index}
            className={styles.colorPaletteElement}
            style={{ background: elem }}
          />
        ))}
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
        <div className={styles.half2}>
          <div className={styles.imageWithSquare}>
            <DoodlesEllipse className={styles.doodleDot1} />
            <img src={DesignGallery2.src} />
            <DoodlesEllipse className={styles.doodleDot2} />
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

        <ThreeTriangles className={styles.triangle3} />
        <TwoSquares className={styles.square1} />
        <TwoSquares className={styles.square2} />
        <div className={styles.circle5} />
        <div className={styles.circle6} />
        <div className={styles.circle7} />
        <div>
          <h2>Some color combinations</h2>
          <div className={styles.colorDesignGrid}>
            {ColorPalettes.map((elem, index) => (
              <ColorDesignsElement
                key={index}
                colors={elem.colors}
                image={elem.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
