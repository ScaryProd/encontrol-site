import { type TeamLinks } from "./common";

export type Member = {
  id: number;
  name: string;
  user: string;
  image: string;
  description: string;
  links?: TeamLinks;
};

export const members: Member[] = [
  {
    id: 1,
    name: "Mauricio",
    user: "Maurimo",
    image: "/members/Mauricio.png",
    description: "Mauricio es maurimo",
  },
  {
    id: 2,
    name: "Joy",
    user: "Jooyink",
    image: "/members/Joy.png",
    description: "Joy es Joy",
  },
  {
    id: 3,
    name: "Alvaro",
    user: "Alvie",
    image: "/members/Alvaro.png",
    description: "Alvaro es Alvaro",
    links: {
      website: "https://www.alvie.dev/",
    },
  },
  {
    id: 4,
    name: "Dana",
    user: "sgab",
    image: "/members/Dana.png",
    description: "Dana es Dana",
  },
  {
    id: 5,
    name: "Paola",
    user: "Pompompaola",
    image: "/members/Paola.png",
    description: "Paola es Paola",
  },
];
