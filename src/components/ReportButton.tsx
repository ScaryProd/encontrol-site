import { useState } from "react";
import { FaFlag } from "react-icons/fa";
import styles from "./ReportButton.module.css";

const WORKER_URL = "https://helloworld.alvie-dev.workers.dev";

const REASONS = [
  "Imagen incorrecta",
  "Informacion incorrecta",
  "Falta informacion",
  "Un link esta roto",
  "Otro",
];

type Props = {
  type: "game" | "developer";
  name: string;
  slug: string;
};

function ReportButton({ type, name, slug }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function toggleReason(reason: string) {
    setSelected((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason],
    );
  }

  async function handleSubmit() {
    if (selected.length === 0) return;
    setStatus("sending");

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, name, slug, reasons: selected, notes }),
      });

      if (res.ok) {
        setStatus("sent");
        setTimeout(() => {
          setOpen(false);
          setStatus("idle");
          setSelected([]);
          setNotes("");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.trigger} onClick={() => setOpen(!open)}>
        <FaFlag />
      </button>

      {open && (
        <div className={styles.modal}>
          <div className={styles.modalInner}>
            <h3>Reportar: {name}</h3>
            <p>Selecciona las razones del reporte</p>

            <div className={styles.reasons}>
              {REASONS.map((reason) => (
                <button
                  key={reason}
                  className={`${styles.reason} ${selected.includes(reason) ? styles.selected : ""}`}
                  onClick={() => toggleReason(reason)}
                >
                  {reason}
                </button>
              ))}
            </div>

            <textarea
              className={styles.notes}
              placeholder="Notas adicionales (opcional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <div className={styles.actions}>
              <button className={styles.cancel} onClick={() => setOpen(false)}>
                Cancelar
              </button>
              <button
                className={styles.submit}
                onClick={handleSubmit}
                disabled={selected.length === 0 || status === "sending"}
              >
                {status === "sending"
                  ? "Enviando..."
                  : status === "sent"
                    ? "¡Enviado!"
                    : status === "error"
                      ? "Error, intenta de nuevo"
                      : "Enviar reporte"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportButton;
