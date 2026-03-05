import { type TeamLinks } from "../data/common";
import { FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { SiItchdotio } from "react-icons/si";

function SocialIcons({
  links,
  className,
}: {
  links: TeamLinks;
  className?: string;
}) {
  return (
    <div className={className}>
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

export default SocialIcons;
