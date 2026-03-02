import styles from "./Footer.module.css";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a
          href="https://instagram.com/encontrol.mty"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://bsky.app/profile/encontrol.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Bluesky"
        >
          <FaBluesky />
        </a>
        <a
          href="https://discord.com/invite/Cad9RaE4s6"
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} EnControl. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
