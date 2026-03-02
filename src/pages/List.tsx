import { useState, useMemo } from "react";
import { games, type ReleaseDate } from "../data/games";
import styles from "./List.module.css";

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
            <div className={styles.imageWrap}>
              <img
                src={game.imageUrl}
                alt={game.title}
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h3>{game.title}</h3>
              <div className={styles.meta}>
                <a href={game.team.url} target="_blank" rel="noreferrer">
                  {game.team.name}
                </a>
                <span>{formatRelease(game.release)}</span>
              </div>
              <p>{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
