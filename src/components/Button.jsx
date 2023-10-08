import styles from "./Button.module.css";

function Button({ btnText, onClick, className }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {btnText}
    </button>
  );
}

export default Button;
