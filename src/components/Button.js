import styles from "../styles/Button.module.css";

function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;
