import styles from "./Button.module.scss";

export default function Button(props) {
  return <button className={`${styles.btn} ${props.large && styles.large} ${props.secondary && styles.secondary}`} {...props}>{props.children}</button>;
}
