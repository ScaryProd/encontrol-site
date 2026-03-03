import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";
import {
  type TeamLinks,
  type ReleaseDate,
  type StoreLinks,
} from "../data/common";
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
      {store.website && (
        <a
          href={store.website}
          target="_blank"
          rel="noreferrer"
          aria-label="Sitio web"
        >
          <FaGlobe />
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

  const relatedGames = games.filter(
    (g) =>
      g.slug !== game.slug &&
      g.developers.some((dev) =>
        game.developers.some((d) => d.name === dev.name),
      ),
  );

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
            <h3>
              {game.developers.length > 1 ? "Desarrolladores" : "Desarrollador"}
            </h3>
            {game.developers.map((dev) => (
              <div key={dev.name} className={styles.devRow}>
                {dev.logoUrl && (
                  <img
                    src={dev.logoUrl}
                    alt={dev.name}
                    className={styles.teamLogo}
                  />
                )}
                <span className={styles.teamName}>{dev.name}</span>
                <TeamIcons links={dev.links} />
              </div>
            ))}
          </div>

          <div className={styles.section}>
            <h3>Disponible en</h3>
            <StoreIcons store={game.store} />
          </div>
        </div>
      </div>

      {relatedGames.length > 0 && (
        <div className={styles.related}>
          <h2>Más juegos de este desarrollador</h2>
          <div className={styles.relatedGrid}>
            {relatedGames.map((related) => (
              <Link
                key={related.id}
                to={`/games/${related.slug}`}
                className={styles.relatedCard}
              >
                <img
                  src={related.imageUrl}
                  alt={related.title}
                  className={styles.relatedImage}
                />
                <span>{related.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GamePage;
