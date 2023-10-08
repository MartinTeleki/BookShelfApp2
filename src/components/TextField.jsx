import styles from "./TextField.module.css";

function TextField({ type, id, placeholder }) {
  return (
    <input
        className={styles.textField}
        type={type}
        id={id}
        placeholder={placeholder}
    />
  );
}

export default TextField;
