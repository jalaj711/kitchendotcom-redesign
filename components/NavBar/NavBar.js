import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import Hamburger from "../../assets/hamburger.svg";
import Link from "next/link";
import BG from "../../assets/design-gallery/top-bg.webp";
import Logo from "../../assets/logo.webp";
import { useRouter } from "next/router";
import { AiOutlineInfoCircle, AiOutlineComment, AiOutlineHome } from "react-icons/ai";
import { GrBlog } from "react-icons/gr";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);
  const handleClose = (evt) => {
    const mobileNav = document.getElementById("mobile-overlay");
    if (evt.target === mobileNav) {
      document.documentElement.style.overflowY = "auto";
      setOpen(false);
    }
  };
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const elem = document.getElementById("page-bg");
      if (elem) {
        const h = elem.getBoundingClientRect().height;
        if (window.scrollY > h) {
          setNavbarColor(true);
        } else {
          setNavbarColor(false);
        }
      }
    });
  }, []);
  return (
    <>
      <nav className={`${styles.nav} ${navbarColor && styles.blackNav}`}>
        <button
          className={styles.hamburger}
          onClick={() => {
            document.documentElement.style.overflowY = "hidden";
            setOpen(true);
          }}
          title="show menu"
        >
          <img src={Hamburger.src} width="36" alt="" />
        </button>
        <Link href="/">Kitchendotcom</Link>
        <span style={{ flexGrow: 1 }} />
        <div className={styles.hideOnSmall}>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blog">Blog</Link>
          {/* <Link style={{color: navbarColor}} href="/cities">Cities</Link> */}
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
          <div className={styles.mobileNavBg}>
            <img src={BG.src} className={styles.navBg} />
            <div>
              <img src={Logo.src} height={72} />
              <h1>Kitchendotcom</h1>
            </div>
          </div>
          <div className={styles.mobileNav}>
            <li
              className={
                styles.mobileNavLink + " " +
                (router.asPath == "/" ? styles.activeLink : "")
              }
            >
              <AiOutlineHome className={styles.icon} />
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li
              className={
                styles.mobileNavLink + " " +
                (router.asPath == "/about-us" ? styles.activeLink : "")
              }
            >
              <AiOutlineInfoCircle className={styles.icon} />
              <Link href="/about-us" onClick={() => setOpen(false)}>
                About Us
              </Link>
            </li>
            <li
              className={
                styles.mobileNavLink + " " +
                (router.asPath == "/blog" ? styles.activeLink : "")
              }
            >
              <GrBlog className={styles.icon} />
              <Link href="/blog" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </li>
            {/* <Link href="/cities" className={styles.mobileNavLink + " " + (router.asPath == "/" ? styles.activeLink : "")} onClick={() => setOpen(false)}>
            Cities
          </Link> */}
            <li
              className={
                styles.mobileNavLink + " " +
                (router.asPath == "/contact-us" ? styles.activeLink : "")
              }
            >
              <AiOutlineComment className={styles.icon} />
              <Link href="/contact-us" onClick={() => setOpen(false)}>
                Contact us
              </Link>
            </li>
          </div>
          <span style={{position: "absolute", bottom: 0}}>
            An initiative by <a href="http://ideagointeriors.com/">Ideago Interiors</a>
          </span>
        </div>
      </div>
    </>
  );
}
