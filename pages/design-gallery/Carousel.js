import ColorPalettes from "./color-palettes.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import styles from "./carousel.module.scss";

function ColorDesignsElement({ image, colors }) {
  return (
    <div className={styles.colorDesignCard}>
      <img src={image} />
      <h4>Color Palette</h4>
      <div>
        {colors.map((color, index) => (
          <span
            key={index}
            className={styles.colorPaletteElement}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
export default function ColourElementsCarousel() {
  const [current, setCurrent] = useState(0);
  return (
    <div className={styles.container}>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showStatus={false}
        selectedItem={current}
        swipeable={false}
        stopOnHover={false}
        onChange={(index) => setCurrent(index)}
      >
        {ColorPalettes.map((paletteSheet, index) => (
          <div key={index} className={styles.colorDesignGrid}>
            {paletteSheet.map((palette, index) => (
              <ColorDesignsElement
                key={index}
                colors={palette.colors}
                image={palette.image}
              />
            ))}
          </div>
        ))}
      </Carousel>
      <div className={styles.controls}>
        <span className={`${styles.controlDot} ${current === 0 ? styles.activeControlDot : ''}`} />
        <span className={`${styles.controlDot} ${current === 1 ? styles.activeControlDot : ''}`} />
        <span className={`${styles.controlDot} ${current === 2 ? styles.activeControlDot : ''}`} />
        <span className={`${styles.controlDot} ${current === 3 ? styles.activeControlDot : ''}`} />
      </div>
    </div>
  );
}
