import styles from "./Button.module.scss";

export default function Button(props) {
  return <button className={styles.btn} {...props}>{props.children}</button>;
}
