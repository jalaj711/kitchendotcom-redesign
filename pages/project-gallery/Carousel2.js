import { useState } from "react";
import styles from "./Carousel.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const formatNumber = (n) => (n > 9 ? n : "0" + n);

export default function CustomCarousel({ data }) {
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
          {data.map((elem, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={"/media/" + elem.image} className={styles.img} alt="" />
              <div key={elem.id} className={styles.additionalContainer}>
                <h2>{elem.project_name}</h2>
                <div className={styles.feedbackHolder}>
                  <p style={{ maxWidth: "60vw", color: "#3c3c3c" }}>
                    {elem.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.controls}>
        <button
          onClick={() => setCurrent(current - 1)}
          className={styles.prevButton}
        >
          &lt;
        </button>
        <span className={styles.currentStatus}>
          <b>{formatNumber(current + 1)}</b>/{formatNumber(data.length)}
        </span>
        <button
          onClick={() => setCurrent(current + 1)}
          className={styles.nextButton}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
