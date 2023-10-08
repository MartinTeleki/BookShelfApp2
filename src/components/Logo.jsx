import styles from "./Logo.module.css";

import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.firstWordSpan}> Projekt </span>{" "}
      <span className={styles.secondWordSpan}> Bookshelf </span>
    </div>
  );
}

export default Logo;
