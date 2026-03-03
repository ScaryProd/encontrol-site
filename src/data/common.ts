export type TeamLinks = {
  instagram?: string;
  facebook?: string;
  bluesky?: string;
  twitter?: string;
  website?: string;
  discord?: string;
  itch?: string;
  steam?: string;
};

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
  website?: string;
};

export type Developer = {
  name: string
  logoUrl?: string
  links: TeamLinks
}

export type Game = {
  id: number
  slug: string
  title: string
  description: string
  imageUrl: string
  developers: Developer[]
  store: StoreLinks
  release: ReleaseDate
}
