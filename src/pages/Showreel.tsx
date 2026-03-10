import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { games } from "../data/games";
import styles from "./Showreel.module.css";

const clips = games
  .filter((g) => g.clip !== undefined)
  .sort(() => Math.random() - 0.5);

function Showreel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const game = clips[current];
  const clip = game?.clip;

  function advance() {
    setVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % clips.length);
    }, 500);
  }

  function handleReady() {
    setVisible(true);
  }

  useEffect(() => {
    if (!clip) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    setVisible(false);

    if (clip.type === "mp4" && videoRef.current) {
      videoRef.current.load();
      videoRef.current.currentTime = 10;
      // visible is set in onCanPlay
    }

    if (clip.type === "youtube") {
      // iframe has no load event, give it a moment
      setTimeout(handleReady, 750);
    }

    const DEFAULT_DURATION = 20; // seconds

    // then when setting the timer:
    timerRef.current = setTimeout(
      advance,
      (clip.duration ?? DEFAULT_DURATION) * 1000,
    );

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  if (clips.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No hay clips disponibles todavía.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.player} ${visible ? styles.visible : styles.hidden}`}
      >
        {clip?.type === "mp4" && (
          <video
            ref={videoRef}
            className={styles.video}
            muted
            playsInline
            onCanPlay={() => {
              videoRef.current?.play();
              handleReady();
            }}
          >
            <source src={clip.url} type="video/mp4" />
          </video>
        )}

        {clip?.type === "youtube" && (
          <iframe
            className={styles.video}
            src={clip.url}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        )}

        <div className={styles.overlay}>
          <Link to={`/games/${game.slug}`} className={styles.overlayLink}>
            <div className={styles.overlayTextGroup}>
              <span className={styles.overlayTitle}>{game.title}</span>
              <span className={styles.overlayDev}>
                {game.developers.map((d) => `@${d.name}`).join(" · ")}
              </span>
            </div>
            <img
              src="/encontrol_logo.jpg"
              alt="EnControl"
              className={styles.overlayLogo}
            />
          </Link>
        </div>

        <div className={styles.controls}>
          <button
            onClick={() => {
              if (timerRef.current) clearTimeout(timerRef.current);
              advance();
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showreel;
