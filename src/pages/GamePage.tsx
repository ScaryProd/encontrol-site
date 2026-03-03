import { useParams, Link } from "react-router-dom";
import { games, type TeamLinks, type StoreLinks } from "../data/games";
import styles from "./GamePage.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaSteam,
  FaXbox,
  FaPlaystation,
  FaGlobe,
  FaArrowLeft,
} from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { SiGogdotcom, SiItchdotio, SiNintendoswitch } from "react-icons/si";
import type { ReleaseDate } from "../data/games";

function formatRelease(release: ReleaseDate): string {
  switch (release.type) {
    case "date":
      return new Date(release.value).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    case "year":
      return `${release.value}`;
    case "quarter":
      return release.value;
    case "tbd":
      return "Próximamente";
  }
}

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
    </div>
  );
}

function StoreIcons({ store }: { store: StoreLinks }) {
  return (
    <div className={styles.icons}>
      {store.steam && (
        <a
          href={store.steam}
          target="_blank"
          rel="noreferrer"
          aria-label="Steam"
        >
          <FaSteam />
        </a>
      )}
      {store.gog && (
        <a href={store.gog} target="_blank" rel="noreferrer" aria-label="GOG">
          <SiGogdotcom />
        </a>
      )}
      {store.itch && (
        <a
          href={store.itch}
          target="_blank"
          rel="noreferrer"
          aria-label="itch.io"
        >
          <SiItchdotio />
        </a>
      )}
      {store.playstation && (
        <a
          href={store.playstation}
          target="_blank"
          rel="noreferrer"
          aria-label="PlayStation"
        >
          <FaPlaystation />
        </a>
      )}
      {store.xbox && (
        <a href={store.xbox} target="_blank" rel="noreferrer" aria-label="Xbox">
          <FaXbox />
        </a>
      )}
      {store.switch && (
        <a
          href={store.switch}
          target="_blank"
          rel="noreferrer"
          aria-label="Nintendo Switch"
        >
          <SiNintendoswitch />
        </a>
      )}
    </div>
  );
}

function GamePage() {
  const { slug } = useParams();
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <div className={styles.notFound}>
        <h1>Juego no encontrado</h1>
        <Link to="/games" className={styles.back}>
          <FaArrowLeft /> Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link to="/games" className={styles.back}>
        <FaArrowLeft /> Volver a la lista
      </Link>

      <div className={styles.hero}>
        <img src={game.imageUrl} alt={game.title} className={styles.image} />
        <div className={styles.heroInfo}>
          <h1>{game.title}</h1>
          <p className={styles.release}>{formatRelease(game.release)}</p>
          <p>{game.description}</p>

          <div className={styles.section}>
            <h3>Equipo</h3>
            <div className={styles.teamRow}>
              {game.team.logoUrl && (
                <img
                  src={game.team.logoUrl}
                  alt={game.team.name}
                  className={styles.teamLogo}
                />
              )}
              <span className={styles.teamName}>{game.team.name}</span>
            </div>
            <TeamIcons links={game.team.links} />
          </div>

          <div className={styles.section}>
            <h3>Disponible en</h3>
            <StoreIcons store={game.store} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
