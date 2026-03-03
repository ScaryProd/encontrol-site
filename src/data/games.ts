import { type TeamLinks } from "./common";

export type ReleaseDate =
  | { type: "date"; value: string }
  | { type: "year"; value: number }
  | { type: "quarter"; value: string }
  | { type: "tbd" };

export type StoreLinks = {
  steam?: string;
  gog?: string;
  itch?: string;
  playstation?: string;
  xbox?: string;
  switch?: string;
};

export type Game = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  team: {
    name: string;
    logoUrl?: string;
    links: TeamLinks;
  };
  store: StoreLinks;
  release: ReleaseDate;
};
export const games: Game[] = [
  {
    id: 1,
    slug: "Eagle-knight-paradox",
    title: "Eagle Knight Paradox",
    description: "Platformer chidongo",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3008700/library_600x900_2x.jpg?t=1765331087",
    team: {
      name: "Playstorm Studios",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1161879165919870977/3yLmImKQ_400x400.png",
      links: {
        website: "https://encontrol.dev",
        twitter: "https://twitter.com/playstorm",
      },
    },
    store: {
      steam: "https://store.steampowered.com/app/3008700",
    },
    release: { type: "year", value: 2026 },
  },
  {
    id: 2,
    slug: "Uppercute",
    title: "Uppercute",
    description: "Speedrun platformer",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3151660/16ed08a363857124e7aa8e99b64e6e8ce931b9c1/library_600x900_2x.jpg?t=1749495379",
    team: {
      name: "Pretty Scar",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1902760092984070144/q8AxPHop_400x400.jpg",
      links: {
        bluesky: "https://bsky.app/profile/prettyscar.dev",
      },
    },
    store: {
      steam: "https://store.steampowered.com/app/3151660",
      itch: "https://prettyscar.itch.io/uppercute",
    },
    release: { type: "quarter", value: "Q2 2026" },
  },
  {
    id: 3,
    slug: "Whodunnit",
    title: "WHODUNNIT",
    description:
      "WHODUNNIT: Hitting Singles is the first episode of a comedic mystery visual novel following a man who must answer a burning question: who the hell did he hook up with last night?",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3851280/6ba7398a79a075047ace6b5343b627ec436c5a50/library_capsule_2x.jpg?t=1757969797",
    team: {
      name: "Don Attico",
      logoUrl:
        "https://cdn.bsky.app/img/avatar/plain/did:plc:sdpi3a4hw672aq26weu3qdud/bafkreieplw27vqutl7arbh4xa2djojetwv6y5itpnitw3lwljnl4o26oia@jpeg",
      links: {
        bluesky: "https://bsky.app/profile/whodunnitvn.bsky.social",
      },
    },
    store: {
      steam: "https://store.steampowered.com/app/3851280/WHODUNNIT/",
      itch: "https://donattico.itch.io/whodunnit",
    },
    release: { type: "year", value: 2026 },
  },
];
