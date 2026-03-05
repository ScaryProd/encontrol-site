import styles from "./Contact.module.css";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaBluesky, FaDiscord } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <section className={styles.intro}>
        <h1>Contacto</h1>
        <p>Unete a la comunidad! Estamos presentes en los siguientes medios:</p>
      </section>

      <section className={styles.discord}>
        <div className={styles.discordText}>
          <h2>Únete a nuestro Discord</h2>
          <p>
            Aqui es donde nos reunimos, organizamos, y platicamos de todos los
            temas relacionados a videojuegos, y la comunidad.
          </p>
        </div>
        <a
          href="https://discord.com/invite/Cad9RaE4s6"
          target="_blank"
          rel="noreferrer"
          className={styles.discordButton}
        >
          <FaDiscord />
          Unirse al servidor
        </a>
      </section>

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2>Redes sociales</h2>
          <p>Síguenos para estar al tanto de novedades, eventos y más.</p>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com/encontrol.mty"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://bsky.app/profile/encontrol.dev"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaBluesky />
              <span>Bluesky</span>
            </a>
          </div>
        </section>

        <section className={styles.card}>
          <h2>Correo electrónico</h2>
          <p>
            Para una comunicacion mas directa, favor de mandarnos un correo.
          </p>
          <a href="mailto:contact@encontrol.dev" className={styles.emailLink}>
            <FaEnvelope />
            <span>contact@encontrol.dev</span>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Contact;
