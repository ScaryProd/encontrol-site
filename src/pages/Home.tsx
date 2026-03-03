import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <img
          src="/encontrol_logo_white.png"
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
        <Link to="https://discord.com/invite/Cad9RaE4s6" className={styles.cta}>
          Únete
        </Link>
      </section>

      <section className={styles.section}>
        <h2>¿Quiénes somos?</h2>
        <h3>“Comunidad abierta de desarrolladores de videojuegos”</h3>
        <p>
          Somos una comunidad abierta a todos, no es exclusiva, se invita a
          unirse y participar a todos los interesados, ya sean profesionistas,
          de hobby, novatos o veteranos.
        </p>
        <p>
          Todos somos game devs. No es necesario haber publicado, o estar en la
          industria para pertenecer a la comunidad.
        </p>
      </section>

      <section className={styles.section}>
        <h2>¿Qué hacemos?</h2>
        <p>
          Meetups presenciales: Juntadas de presentaciones y networking en
          diversas sedes. No hay un fin en particular para las presentaciones,
          puede ser presentarse a la comunidad, compartir progreso, promocionar
          proyectos propios
        </p>
        <p>
          Coworking virtual: Espacio semanal para trabajar, compartir trabajo o
          simplemente platicar en torno a la industria
        </p>
        <p>
          Bytes presenciales: Presencia en eventos locales como convenciones,
          artist alleys, conferencias
        </p>
      </section>
    </div>
  );
}

export default Home;
