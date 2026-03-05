import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/encontrol_logo_animated.gif" alt="EnControl" />
      </Link>

      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>

      <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
        <Link className={styles.link} to="/" onClick={() => setOpen(false)}>
          Inicio
        </Link>
        <Link
          className={styles.link}
          to="/about"
          onClick={() => setOpen(false)}
        >
          Nosotros
        </Link>
        <Link
          className={styles.link}
          to="/events"
          onClick={() => setOpen(false)}
        >
          Eventos
        </Link>
        <Link className={styles.link} to="/developers">
          Devs
        </Link>
        <Link
          className={styles.link}
          to="/games"
          onClick={() => setOpen(false)}
        >
          Juegos
        </Link>
        <Link
          className={styles.link}
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}

export default Header;
