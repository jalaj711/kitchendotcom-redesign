import { useState } from "react";
import styles from "./Carousel.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const formatNumber = n =>  n > 9 ? n : '0' + n

export default function CustomCarousel({ images, additionalElements }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className={styles.carousel}>
      <div className={styles.images}>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showStatus={false}
          selectedItem={current}
          onChange={(index) => setCurrent(index)}
        >
          {images.map((elem, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={elem} style={{ width: "min-content !important", maxWidth: '70vw'}} />
              {
                additionalElements && additionalElements[index]
              }
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.controls}>
        <button onClick={() => setCurrent(current - 1)} className={styles.prevButton}>&lt;</button>
        <span className={styles.currentStatus}>
          <b>{formatNumber(current+1)}</b>/{formatNumber(images.length)}
        </span>
        <button onClick={() => setCurrent(current + 1)} className={styles.nextButton}>&gt;</button>
      </div>
    </div>
  );
}
