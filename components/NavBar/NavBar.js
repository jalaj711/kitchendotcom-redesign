import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
        <span>Kitchendotcom</span>
        <span style={{ flexGrow: 1 }} />
        <span>Home</span>
        <span>About Us</span>
        <span>Blog</span>
        <span>Cities</span>
        <span>Contact us</span>
    </nav>
  );
}
