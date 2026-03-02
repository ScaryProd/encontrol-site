import { events, type EventLocation } from "../data/events";
import styles from "./Events.module.css";

function formatDate(date: string): string {
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) {
    return date;
  }
  return parsed.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
function formatLocation(location: EventLocation): string {
  switch (location.type) {
    case "online":
      return `Online · ${location.platform}`;
    case "inperson":
      return `${location.venue} · ${location.city}`;
  }
}

const upcoming = events.filter((e) => e.status === "upcoming");
const past = events.filter((e) => e.status === "past");

function Events() {
  return (
    <div>
      <section className={styles.intro}>
        <h1>Eventos</h1>
        <p>Juntadas, meetups y más de la comunidad EnControl.</p>
      </section>

      {upcoming.length > 0 && (
        <section className={styles.upcoming}>
          <h2>Próximos Eventos</h2>
          <div className={styles.upcomingGrid}>
            {upcoming.map((event) => (
              <div key={event.id} className={styles.upcomingCard}>
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className={styles.upcomingImage}
                  />
                )}
                <span className={styles.date}>{formatDate(event.date)}</span>
                <h3>{event.title}</h3>
                <span className={styles.location}>
                  {formatLocation(event.location)}
                </span>
                <p>{event.description}</p>
                {event.status === "upcoming" && (
                  <a
                    href={event.registerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.register}
                  >
                    Regístrate
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={styles.pastSection}>
        <h2>Eventos Pasados</h2>
        <div className={styles.list}>
          {past.map((event, index) => (
            <div
              key={event.id}
              className={`${styles.card} ${index % 2 !== 0 ? styles.reverse : ""}`}
            >
              <div className={styles.cardLeft}>
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className={styles.cardImage}
                  />
                )}
                <span className={styles.date}>{formatDate(event.date)}</span>
                <h3>{event.title}</h3>
                <span className={styles.location}>
                  {formatLocation(event.location)}
                </span>
                <p>{event.description}</p>
              </div>
              <div className={styles.cardRight}>
                <span className={styles.recapLabel}>Recap</span>
                <p>{event.status === "past" && event.recap}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;
