import styles from "./Footer.module.scss";
import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import WhatsAppIcon from "../../assets/WhatsApp.svg";
import LampImg from "../../assets/lamp.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <h1>Kitchendotcom</h1>
        <div>
          <Image src={FacebookIcon} width={64} alt="facebook" />
          <Image src={InstagramIcon} width={64} alt="Instagram" />
          <Image src={TwitterIcon} width={64} alt="Twitter" />
          <Image src={WhatsAppIcon} width={64} alt="WhatsApp" />
        </div>
      </div>
      <div className={styles.getInTouch}>
        <h2>Get In Touch</h2>
        <div className={styles.contactDetails}>
          <div>
            <span>Call us</span>
            <span>+91 9876543210</span>
          </div>
          <div>
            <span>Email us</span>
            <span>@kitchendotcom</span>
          </div>
        </div>
      </div>
      <div className={styles.aboutus}>
        <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Cities</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles.offerings}>
        <h3>Offerings</h3>
        <ul>
            <li>Kitchen Price estimator</li>
            <li>Product Gallery</li>
            <li>Design Gallery</li>
        </ul>
      </div>
      <div className={styles.locations}>
        <h3>Locations</h3>
      </div>
      <div className={styles.copyrights}>
        <div style={{textAlign: "left"}}>
            <span>Designed by</span>
            <span>RACreators.com</span>
        </div>
        <div>
            <span>Terms and conditions</span>
            <span>Privacy Policy</span>
        </div>
        <div style={{ textAlign: "right"}}>
            <span>@2022Kitchendotcom.in</span>
            <span>All Rights Reserved</span>
        </div>
      </div>
      <img src={LampImg.src} alt="lamp" className={styles.lampImage} />
    </footer>
  );
}
