import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <img
          src="/encontrol_logo.jpg"
          alt="EnControl Logo"
          className={styles.logo}
        />
        <h1>Bienvenido a EnControl</h1>
        <p>
          La comunidad abierta de desarrollo de videojuegos mas grande de
          Monterrey.
        </p>
        <p>
          Este sitio es un WIP (Work in Progress), mantente al pendiente de
          nuestras redes sociales y Discord para más información.
        </p>
        <button>Únete</button>
      </section>

      <section className={styles.section}>
        <h2>¿Quiénes somos?</h2>
        <p>descripción de la comunidad</p>
      </section>

      <section className={styles.section}>
        <h2>¿Qué hacemos?</h2>
        <p>actividades</p>
      </section>
    </div>
  );
}

export default Home;
