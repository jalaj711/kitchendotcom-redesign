import { useState } from "react";
import styles from "./NavBar.module.scss";
import Hamburger from "../../assets/hamburger.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClose = (evt) => {
    const mobileNav = document.getElementById("mobile-overlay");
    if (evt.target === mobileNav) {
      setOpen(false);
    }
  };
  return (
    <>
      <nav className={styles.nav}>
        <button className={styles.hamburger} onClick={() => setOpen(true)}>
          <img src={Hamburger.src} width="36" alt="" />
        </button>
        <a href="#">Kitchendotcom</a>
        <span style={{ flexGrow: 1 }} />
        <div className={styles.hideOnSmall}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Cities</a>
          <a href="#">Contact us</a>
        </div>
      </nav>
      <div
        className={styles.overlay}
        id="mobile-overlay"
        onClick={handleClose}
        style={{ display: open ? "block" : "none" }}
      >
        <div className={styles.mobileNav}>
          <a href="#" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            About Us
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Blog
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Cities
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Contact us
          </a>
        </div>
      </div>
    </>
  );
}
