import { useParams, Link } from "react-router-dom";
import { type TeamLinks } from "../data/common";
import styles from "./GamePage.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaSteam,
  FaGlobe,
  FaArrowLeft,
} from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { SiItchdotio } from "react-icons/si";
import { members } from "../data/team";

function TeamIcons({ links }: { links: TeamLinks }) {
  return (
    <div className={styles.icons}>
      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noreferrer"
          aria-label="Sitio web"
        >
          <FaGlobe />
        </a>
      )}
      {links.instagram && (
        <a
          href={links.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      )}
      {links.facebook && (
        <a
          href={links.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      )}
      {links.twitter && (
        <a
          href={links.twitter}
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      )}
      {links.bluesky && (
        <a
          href={links.bluesky}
          target="_blank"
          rel="noreferrer"
          aria-label="Bluesky"
        >
          <FaBluesky />
        </a>
      )}
      {links.itch && (
        <a
          href={links.itch}
          target="_blank"
          rel="noreferrer"
          aria-label="Itch.io"
        >
          <SiItchdotio />
        </a>
      )}
      {links.steam && (
        <a
          href={links.steam}
          target="_blank"
          rel="noreferrer"
          aria-label="Steam"
        >
          <FaSteam />
        </a>
      )}
    </div>
  );
}

function AboutMember() {
  const { user } = useParams();
  const member = members.find((m) => m.user === user);

  if (!member) {
    return (
      <div className={styles.notFound}>
        <h1>Miembro no encontrado</h1>
        <Link to="/about" className={styles.back}>
          <FaArrowLeft /> Volver a Nosotros
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/about" className={styles.back}>
        <FaArrowLeft /> Volver a Nosotros
      </Link>

      <div className={styles.hero}>
        <img src={member.image} alt={member.name} className={styles.image} />
        <div className={styles.heroInfo}>
          <h1>{member.name}</h1>
          <p>{member.description}</p>

          <div className={styles.section}>
            <h3>Links:</h3>
            {member.links && <TeamIcons links={member.links} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMember;
