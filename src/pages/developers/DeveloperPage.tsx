import { useParams, Link } from "react-router-dom";
import { developers, games } from "../../data/games";
import { type TeamLinks } from "../../data/common";
import styles from "./DeveloperPage.module.css";
import { FaInstagram, FaFacebook, FaGlobe, FaArrowLeft } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { SiItchdotio } from "react-icons/si";
import ReportButton from "../../components/ReportButton";

function DevIcons({ links }: { links: TeamLinks }) {
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
          aria-label="itch.io"
        >
          <SiItchdotio />
        </a>
      )}
    </div>
  );
}

function DeveloperPage() {
  const { slug } = useParams();
  const dev = developers.find((d) => d.slug === slug);

  if (!dev) {
    return (
      <div className={styles.notFound}>
        <h1>Desarrollador no encontrado</h1>
        <Link to="/developers" className={styles.back}>
          <FaArrowLeft /> Volver a desarrolladores
        </Link>
      </div>
    );
  }

  const devGames = games.filter((g) =>
    g.developers.some((d) => d.name === dev.name),
  );

  return (
    <div className={styles.container}>
      <Link to="/developers" className={styles.back}>
        <FaArrowLeft /> Volver a desarrolladores
      </Link>

      <div className={styles.hero}>
        <div className={styles.logoWrap}>
          {dev.logoUrl ? (
            <img src={dev.logoUrl} alt={dev.name} className={styles.logo} />
          ) : (
            <div className={styles.logoPlaceholder}>{dev.name[0]}</div>
          )}
        </div>
        <div className={styles.heroInfo}>
          <h1>{dev.name}</h1>
          {dev.bio && <p className={styles.bio}>{dev.bio}</p>}
          <DevIcons links={dev.links} />
          <ReportButton type="developer" name={dev.name} slug={dev.slug} />
        </div>
      </div>

      {devGames.length > 0 && (
        <div className={styles.games}>
          <div className={styles.gamesGrid}>
            {devGames.map((game) => (
              <Link
                key={game.slug}
                to={`/games/${game.slug}`}
                className={styles.gameCard}
              >
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className={styles.gameImage}
                />
                <span>{game.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DeveloperPage;
