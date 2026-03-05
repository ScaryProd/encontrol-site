import { type StoreLinks } from "../data/common";
import { FaSteam, FaXbox, FaPlaystation } from "react-icons/fa";
import { SiGogdotcom, SiItchdotio, SiNintendoswitch } from "react-icons/si";

function StoreIcons({
  store,
  className,
}: {
  store: StoreLinks;
  className?: string;
}) {
  return (
    <div className={className}>
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

export default StoreIcons;
