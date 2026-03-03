import { Link } from "react-router-dom";
import { members } from "../data/team";
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <section className={styles.intro}>
        <h1>Nosotros</h1>
        <p>Escribe aquí la historia de la comunidad.</p>
      </section>

      <section className={styles.team}>
        <h2>El Equipo</h2>
        <div className={styles.grid}>
          {members.map((member) => (
            <Link to={`/about/${member.user}`} className={styles.back}>
              <div key={member.id} className={styles.card}>
                <h3>{member.name}</h3>
                <p>{member.user}</p>
                <img src={member.image} alt={member.name} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
