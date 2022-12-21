import styles from "./Footer.module.scss";
import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import WhatsAppIcon from "../../assets/WhatsApp.svg";
import LampImg from "../../assets/lamp.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.con}>
        <div className={styles.main}>
          <h1>Kitchendotcom</h1>
          <div>
            <Image
              src={FacebookIcon}
              width={48}
              alt="facebook"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/kitchendotcom.in",
                  "_blank"
                )
              }
            />
            <Image
              src={InstagramIcon}
              width={48}
              alt="Instagram"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/kitchendotcom.in/",
                  "_blank"
                )
              }
            />
            {/* <Image src={TwitterIcon} width={48} alt="Twitter" /> */}
            <Image
              src={WhatsAppIcon}
              width={48}
              alt="WhatsApp"
              onClick={() =>
                window.open("https://wa.me/+919305281003", "_blank")
              }
            />
          </div>
        </div>
        <div className={styles.getInTouch}>
          <h2>Contact Us</h2>
          <div className={styles.contactDetails}>
            <div>
              <span>Call us</span>
              <span>+91 9305281003</span>
            </div>
            <div>
              <span>Email us</span>
              <span>@kitchendotcom</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutus}>
        <ul>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/cities">Cities</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.offerings}>
        <h3>Offerings</h3>
        <ul>
          <li>
            <Link href="/estimator">Kitchen Price estimator</Link>
          </li>
          <li>
            <Link href="/project-gallery">Project Gallery</Link>
          </li>
          <li>
            <Link href="/design-gallery">Design Gallery</Link>
          </li>
        </ul>
      </div>
      <div className={styles.copyrights}>
        
          <div style={{ textAlign: "left" }}>
           
            <span>Designed by</span>
            <span>RACreators.com</span>
          </div>
      
        <div>
          <span>Our parent company</span>
          <Link href="http://ideagointeriors.com/">Indeago Interiors</Link>
        </div>
        <div style={{ textAlign: "right" }}>
          <span>@2022Kitchendotcom.in</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
