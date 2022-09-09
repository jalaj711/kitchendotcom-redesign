import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={styles.card} {...props}>
      {props.children}
    </div>
  );
}
