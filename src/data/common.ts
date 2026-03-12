export type ReleaseDate =
  | { type: "date"; value: string }
  | { type: "year"; value: number }
  | { type: "quarter"; value: string }
  | { type: "tbd" };

export type TeamLinks = {
  instagram?: string;
  facebook?: string;
  bluesky?: string;
  twitter?: string;
  website?: string;
  discord?: string;
  itch?: string;
  steam?: string;
  youtube?: string;
};

export type StoreLinks = {
  steam?: string;
  gog?: string;
  itch?: string;
  playstation?: string;
  xbox?: string;
  switch?: string;
  website?: string;
};

export type Developer = {
  slug: string;
  name: string;
  logoUrl?: string;
  bio?: string;
  links: TeamLinks;
};

export type GameClip = {
  type: "youtube";
  url: string;
  duration?: number;
};

export type Game = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  clip?: GameClip;
  developers: Developer[];
  store: StoreLinks;
  release: ReleaseDate;
};
