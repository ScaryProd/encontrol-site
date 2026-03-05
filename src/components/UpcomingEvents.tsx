import { Link } from "react-router-dom";
import { events, type EventLocation } from "../data/events";
import styles from "./UpcomingEvents.module.css";

function formatDate(date: string): string {
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return date;
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

function UpcomingEvents() {
  if (upcoming.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Próximos Eventos</h2>
        <Link to="/events" className={styles.seeAll}>
          Ver todos →
        </Link>
      </div>
      <div className={styles.grid}>
        {upcoming.map((event) => (
          <div key={event.id} className={styles.card}>
            {event.imageUrl && (
              <img
                src={event.imageUrl}
                alt={event.title}
                className={styles.image}
              />
            )}
            <div className={styles.info}>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
