import { useState } from "react";
import styles from "./NavBar.module.scss";
import Hamburger from "../../assets/hamburger.svg";
import Link from "next/link";

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
        <Link href="/">Kitchendotcom</Link>
        <span style={{ flexGrow: 1 }} />
        <div className={styles.hideOnSmall}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/cities">Cities</Link>
          <Link href="/contact-us">Contact us</Link>
        </div>
      </nav>
      <div
        className={styles.overlay}
        id="mobile-overlay"
        onClick={handleClose}
        style={{ display: open ? "block" : "none" }}
      >
        <div className={styles.mobileNav}>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about-us" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/cities" onClick={() => setOpen(false)}>
            Cities
          </Link>
          <Link href="/contact-us" onClick={() => setOpen(false)}>
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}
