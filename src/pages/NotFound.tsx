import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Estas "Out of bounds" !</p>
      <p>... En otras palabras, esta pagina no existe.</p>
      <Link to="/" className={styles.link}>
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
