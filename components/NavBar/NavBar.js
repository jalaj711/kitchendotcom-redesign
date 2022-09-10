import styles from "./NavBar.module.scss";
import LeftImage from "../../assets/NavBarLeft.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Image src={LeftImage} alt="lamp" />
      <div>
        <span>Kitchendotcom</span>
        <span style={{ flexGrow: 1 }} />
        <span>Home</span>
        <span>About Us</span>
        <span>Blog</span>
        <span>Cities</span>
        <span>Contact us</span>
      </div>
    </nav>
  );
}
