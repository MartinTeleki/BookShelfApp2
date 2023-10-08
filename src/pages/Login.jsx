import styles from "./Login.module.css";
import Logo from "../components/Logo";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function Login() {

  return (
    <>
      <main className={styles.login}>
        <Logo />
        <form className={styles.form}>
          <div className={styles.formContainer}>
            <TextField
              type="email"
              placeholder="Email"
              id="email"
            />
            <TextField
              type="password"
              placeholder="Heslo"
              id="password"
            />
          </div>
          <div className={styles.btnContainer}>
            <Button
              className="primaryBtn"
              btnText="Přihlásit se"
            />
            <div className={styles.btnContainerSecond}>
              <Button
                className="terciaryBtn"
                btnText="Zapomenuté heslo"
              />
              <Button
                className="secondaryBtn"
                btnText="Vytvořit účet"
              />
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
