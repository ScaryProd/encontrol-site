export type ReleaseDate =
  | { type: "date"; value: string } // "2024-03-15"
  | { type: "year"; value: number } // 2025
  | { type: "quarter"; value: string } // "Q2 2025"
  | { type: "tbd" };

export type Game = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  team: {
    name: string;
    url: string;
  };
  release: ReleaseDate;
};

export const games: Game[] = [
  {
    id: 1,
    title: "Eagle Knight Paradox",
    description: "Platformer chidongo",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3008700/library_600x900_2x.jpg?t=1765331087",
    team: {
      name: "Playstorm Studios",
      url: "https://encontrol.dev",
    },
    release: { type: "year", value: 2026 },
  },
  {
    id: 2,
    title: "Uppercute",
    description: "Speedrun platformer",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3151660/16ed08a363857124e7aa8e99b64e6e8ce931b9c1/library_600x900_2x.jpg?t=1749495379",
    team: {
      name: "PrettyScar",
      url: "https://encontrol.dev",
    },
    release: { type: "quarter", value: "Q2 2026" },
  },
];
