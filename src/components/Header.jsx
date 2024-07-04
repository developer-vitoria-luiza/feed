import styles from "./Header.module.css";
import igniteLogo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo" />
      <h4>Feed</h4>
    </header>
  );
}
