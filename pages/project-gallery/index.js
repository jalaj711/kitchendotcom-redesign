/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import BG from "../../assets/project-gallery/bg.png";
import ChooseUs1 from "../../assets/project-gallery/ChooseUs1.png";
import ChooseUs2 from "../../assets/project-gallery/ChooseUs2.png";
import ChooseUs3 from "../../assets/project-gallery/ChooseUs3.png";
import Footer from "../../components/Footer/Footer";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import URLs from "../../utils/urls";
import fetchFromApi from "../../utils/fetchFromApi";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavBar from "../../components/NavBar/NavBar";

export default function ContactUs() {
  const [data, setData] = useState({ loaded: false });

  useEffect(() => {
    fetchFromApi.get(URLs.PROJECT_GALLERY).then((res) => {
      if (res.status == 200) {
        res.json().then((result) => {
          var a = {
            loaded: true,
            designs: [],
            feedbacks: result.feedbacks,
            videos: result.videos,
          };
          result.designs.map((elem) => a.designs.push("/media/" + elem.image));
          setData(a);
        });
      }
    });
  }, []);
  return (
    <>
    <NavBar />
      <div className={styles.landing}>
        <img alt="" src={BG.src} id="page-bg" />
        <div>
          <h1 className={styles.h1}>Project Gallery</h1>
          <h2 className={styles.h2}>Design Your Kitchen Instantly with us.</h2>
        </div>
      </div>
      {!data.loaded ? (
        <div className={styles.container}>Loading...</div>
      ) : (
        <>
          <div className={styles.container}>
            <h1 className={styles.h1}>Why Choose Us?</h1>
            <div className={styles.chooseUsHolder}>
              <div className={styles.chooseUsCard}>
                <img alt="" src={ChooseUs1.src} />
                <div className={styles.chooseUsTitle}>10</div>
                <div className={styles.chooseUsCaption}>
                  Years of experience
                </div>
              </div>
              <div className={styles.chooseUsCard}>
                <img alt="" src={ChooseUs2.src} />
                <div className={styles.chooseUsTitle}>295</div>
                <div className={styles.chooseUsCaption}>Property Built</div>
              </div>
              <div className={styles.chooseUsCard}>
                <img alt="" src={ChooseUs3.src} />
                <div className={styles.chooseUsTitle}>15</div>
                <div className={styles.chooseUsCaption}>Award Wins</div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <h1 className={styles.h1}>We have done some great work</h1>
            {/* <div className={styles.videoCarousel1}>
              <img alt="" src={Carousel_1_1.src} />
              <img alt="" src={Carousel_1_2.src} />
              <img alt="" src={Carousel_1_3.src} />
            </div> */}
            <div className={styles.carouselHolder}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
              >
                {data.videos.map((elem, index) => (
                  <video
                    key={index}
                    controls
                    src={"/media/" + data.videos[index > 0 ? index-1 : data.videos.length -1].video}
                    style={{
                      width: "min-content !important",
                      maxWidth: "70vw",
                      maxHeight: "50vh",
                    }}
                  />
                ))}
              </Carousel>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                {data.videos.map((elem, index) => (
                  <video
                    key={index}
                    controls
                    src={"/media/" + elem.video}
                    style={{
                      width: "min-content !important",
                      maxWidth: "70vw",
                      maxHeight: "50vh",
                    }}
                  />
                ))}
              </Carousel>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
              >
                {data.videos.map((elem, index) => (
                  <video
                    key={index}
                    controls
                    src={"/media/" + data.videos[index == data.videos.length - 1 ? 0 : index + 1].video}
                    style={{
                      width: "min-content !important",
                      maxWidth: "70vw",
                      maxHeight: "50vh",
                    }}
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <div
            className={styles.container}
            style={{ backgroundColor: "#f3f3f3" }}
          >
            <h1 className={styles.h1}>
              Creative Solutions by Professinal Designers.
            </h1>
            <p>
              We, at KitchenDotCom, seek to provide effective and sustainable
              solutions to our clients. The multi-usable units provided by us,
              are boon for those having space constraints. The special 3-D
              walkthrough provided by us gives the client to have an outlook of
              the kitchen before it is prepared. We provide you with detachable
              units that can be repaired and cleaned separately without altering
              the whole kitchen. Effective consultation at every step of
              designing eliminates any kind of mismatch between the
              clients&apos; expectations and the final outcome.
            </p>
            <Carousel1 images={data.designs || []} />
          </div>
          <div className={styles.container}>
            <h1 className={styles.h1}>
              We&apos;ll let our clients do the talking
            </h1>
            <p>Here&apos;s what they have to say</p>
            <Carousel2 data={data.feedbacks || []} />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
