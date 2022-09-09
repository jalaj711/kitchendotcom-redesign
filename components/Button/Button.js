import styles from "./Button.module.scss";

export default function Button(props) {
  const { children } = props;
  return <button className={styles.btn}>{children}</button>;
}
