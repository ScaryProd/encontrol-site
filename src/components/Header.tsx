import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/encontrol_logo.jpg" alt="EnControl" />
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          Inicio
        </Link>
        <Link className={styles.link} to="/about">
          Nosotros
        </Link>
        <Link className={styles.link} to="/events">
          Eventos
        </Link>
        <Link className={styles.link} to="/list">
          Lista
        </Link>
        <Link className={styles.link} to="/contact">
          Contacto
        </Link>
      </nav>
    </header>
  );
}

export default Header;
