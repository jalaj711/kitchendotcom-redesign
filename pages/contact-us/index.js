import styles from "./styles.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import InternetIcon from "../../assets/Internet.svg";
import PhoneIcon from "../../assets/Phone.svg";
import SecuredLetterIcon from "../../assets/Secured-Letter.svg";
import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import WhatsAppIcon from "../../assets/WhatsApp.svg";
import Background from "../../assets/MainBG.png";
import ThreeTriangles from "../../components/ThreeTriangles";
import DoodleDots from "../../components/DoodleDotsEllipse";
import TwoSquares from "../../components/TwoSquares";
import Image from "next/image";

export default function ContactUs() {
  return (
    <>
      <div className={styles.top}>
        <img src={Background.src} className={styles.bg} alt="bg" />
        <div className={styles.title}>
          <h3>Get in touch!</h3>
          <div>Have an inquiry or some feedback for us?</div>
          <div>Fill out the form below to contact our team.</div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.container}>
            <div className={styles.form}>
              <h2>Send a Message</h2>
              <form>
                <div>
                  <Input placeholder="Your First Name" />
                  <Input
                    placeholder="Your Last Name"
                    style={{ marginLeft: "12px" }}
                  />
                </div>
                <Input placeholder="Your Email Address" />
                <Input placeholder="Your Location" />
                <Input placeholder="How can we help?" />
                <Button>Submit</Button>
              </form>
            </div>
            <div className={styles.details}>
              <div>
                <h2>Contact Info</h2>
                <div>
                  <span>
                    <Image src={PhoneIcon} width={48} alt="phone" />{" "}
                    +919876543210
                  </span>
                  <span>
                    <Image src={SecuredLetterIcon} width={48} alt="email" />{" "}
                    @kitchendotcom
                  </span>
                  <span>
                    <Image src={InternetIcon} width={48} alt="website" />{" "}
                    kitchendotcom.in
                  </span>
                  <div style={{ display: "inline" }}>
                    <Image src={FacebookIcon} width={48} alt="facebook" />
                    <Image src={InstagramIcon} width={48} alt="Instagram" />
                    <Image src={TwitterIcon} width={48} alt="Twitter" />
                    <Image src={WhatsAppIcon} width={48} alt="WhatsApp" />
                  </div>
                </div>
              </div>
              <img
                src="https://s3.amazonaws.com/pocket-curatedcorpusapi-prod-images/b315ccda-47b0-49c5-99a0-12afdd067d85.jpeg"
                alt="team"
                className={styles.image}
              />
            </div>
          </div>
        </div>
        <ThreeTriangles className={styles.triangles} />
        <DoodleDots className={styles.dots} />
        <TwoSquares className={styles.squares} />
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
      </div>
    </>
  );
}
