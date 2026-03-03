import { useState, useMemo } from "react";
import { games } from "../data/games";
import { type ReleaseDate, type StoreLinks } from "../data/common";
import styles from "./List.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaSteam,
  FaXbox,
  FaPlaystation,
  FaGlobe,
} from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { SiGogdotcom, SiItchdotio, SiNintendoswitch } from "react-icons/si";
import { Link } from "react-router-dom";
import { type TeamLinks } from "../data/common";

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

function getReleaseOrder(release: ReleaseDate): number {
  switch (release.type) {
    case "date":
      return new Date(release.value).getFullYear();
    case "year":
      return release.value;
    case "quarter":
      return parseInt(release.value.split(" ")[1]);
    case "tbd":
      return Infinity;
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
      {links.discord && (
        <a
          href={links.website}
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
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

type SortMode = "random" | "title" | "release";

const randomOrder = [...games].sort(() => Math.random() - 0.5);

function List() {
  const [sort, setSort] = useState<SortMode>("random");

  const sorted = useMemo(() => {
    switch (sort) {
      case "random":
        return randomOrder;
      case "title":
        return [...games].sort((a, b) => a.title.localeCompare(b.title));
      case "release":
        return [...games].sort(
          (a, b) => getReleaseOrder(a.release) - getReleaseOrder(b.release),
        );
    }
  }, [sort]);

  return (
    <div>
      <section className={styles.intro}>
        <h1>Juegos de la Comunidad</h1>
        <p>Una colección de juegos creados por miembros de EnControl.</p>
        <p>
          Para agregar tu proyecto, ponte en contacto con un miembro
          organizador.
        </p>
        <div className={styles.sorting}>
          <span>Ordenar por:</span>
          <button
            onClick={() => setSort("random")}
            className={sort === "random" ? styles.active : ""}
          >
            Aleatorio
          </button>
          <button
            onClick={() => setSort("title")}
            className={sort === "title" ? styles.active : ""}
          >
            Título
          </button>
          <button
            onClick={() => setSort("release")}
            className={sort === "release" ? styles.active : ""}
          >
            Fecha
          </button>
        </div>
      </section>

      <div className={styles.list}>
        {sorted.map((game, index) => (
          <div
            key={game.id}
            className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >
            <Link to={`/games/${game.slug}`} className={styles.imageWrap}>
              <img
                src={game.imageUrl}
                alt={game.title}
                className={styles.image}
              />
            </Link>
            <div className={styles.info}>
              <Link to={`/games/${game.slug}`} className={styles.titleLink}>
                <h3>{game.title}</h3>
              </Link>
              <div className={styles.meta}>
                {game.developers.slice(0, 5).map((dev) => (
                  <div key={dev.name} className={styles.devEntry}>
                    {dev.logoUrl && (
                      <img
                        src={dev.logoUrl}
                        alt={dev.name}
                        className={styles.teamLogo}
                      />
                    )}
                    <span className={styles.teamName}>{dev.name}</span>
                  </div>
                ))}
                <span>{formatRelease(game.release)}</span>
              </div>
              <TeamIcons links={game.developers[0].links} />
              <p>{game.description}</p>
              <StoreIcons store={game.store} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
