import styles from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <section className={styles.intro}>
        <h1>Contacto</h1>
      </section>

      <section className={styles.section}>
        <h2>Encuéntranos en</h2>
        <ul className={styles.links}>
          <li>
            <a
              href="https://instagram.com/encontrol.mty"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/encontrol.dev"
              target="_blank"
              rel="noreferrer"
            >
              Bluesky
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/invite/Cad9RaE4s6"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Correo</h2>
        <a href="mailto:contact@encontrol.dev">contact@encontrol.dev</a>
      </section>
    </div>
  );
}

export default Contact;
