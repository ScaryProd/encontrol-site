export type EventLocation =
  | { type: "online"; platform: string; url: string }
  | { type: "inperson"; venue: string; city: string };

export type PastEvent = {
  status: "past";
  recap: string;
};

export type UpcomingEvent = {
  status: "upcoming";
  registerUrl: string;
};

export type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  location: EventLocation;
} & (PastEvent | UpcomingEvent);

export const events: Event[] = [
  {
    id: 1,
    title: "Meetup 001",
    description: "Nuestro primer meetup!",
    date: "2023-05-19",
    location: {
      type: "inperson",
      venue: "Nombre del lugar",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup01.jpg",
  },
  {
    id: 2,
    title: "Cowork",
    description: "Juntadas para chambear y chismear.",
    date: "Todos los miercoles 7:00 PM",
    location: {
      type: "online",
      platform: "Discord",
      url: "discord.com",
    },
    status: "upcoming",
    registerUrl: "https://encontrol.dev",
    imageUrl: "events/Meetup08_poster.png",
  },
  {
    id: 3,
    title: "Byte",
    description: "Byte en un cafe!!",
    date: "2023-12-20",
    location: {
      type: "inperson",
      venue: "Cafe",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "juntada en un cafe de chill.",
    imageUrl: "events/Byte.png",
  },
  {
    id: 4,
    title: "EnControl en Ladweek",
    description:
      "Espacio para compartir trabajo, recibir retroalimentación y hacer networking.",
    date: "2026-03-14",
    location: {
      type: "inperson",
      venue: "Campus Tec, Expo Estudios.",
      city: "Monterrey, NL",
    },
    status: "upcoming",
    imageUrl: "/events/Ladweek.jpg",
    registerUrl:
      "https://www.eventbrite.com.mx/e/ladweek-2026-tickets-1781911287629",
  },
  {
    id: 5,
    title: "Meetup 002",
    description: "Nuestro segundo meetup!",
    date: "2023-09-26",
    location: {
      type: "inperson",
      venue: "Wam House",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup02.jpg",
  },
  {
    id: 6,
    title: "Meetup 003",
    description: "Nuestro Tercer meetup!",
    date: "2023-10-21",
    location: {
      type: "inperson",
      venue: "Apex Systems",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup03.jpg",
  },
  {
    id: 7,
    title: "Meetup 004",
    description: "Nuestro Cuarto meetup!",
    date: "2024-02-02",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "events/Meetup04_poster.png",
  },
  {
    id: 8,
    title: "Meetup 005",
    description: "Nuestro Quinto meetup!",
    date: "2024-07-17",
    location: {
      type: "inperson",
      venue: "XP Facultad de Videojuegos",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup05.jpg",
  },
  {
    id: 9,
    title: "Meetup 006",
    description: "Nuestro Sexto meetup!",
    date: "2024-10-17",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "events/Meetup06_poster.png",
  },
  {
    id: 10,
    title: "Meetup 007",
    description: "Nuestro Septimo meetup!",
    date: "2025-02-23",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup07.jpg",
  },
  {
    id: 11,
    title: "Meetup 008",
    description: "Nuestro Octavo meetup!",
    date: "2025-04-20",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "events/Meetup08_poster.png",
  },
  {
    id: 10,
    title: "Meetup 009",
    description: "Nuestro Noveno meetup!",
    date: "2025-12-02",
    location: {
      type: "inperson",
      venue: "",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup09.JPG",
  },
  {
    id: 10,
    title: "Meetup 010",
    description: "Nuestro Decimo meetup!",
    date: "2026-02-21",
    location: {
      type: "inperson",
      venue: "SPENTA Escuela de Estudios Superiores",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
    imageUrl: "/events/Meetup10.jpg",
  },
  {
    id: 11,
    title: "Meetup (011)",
    description: "Próximamente...",
    date: "Pronto...",
    location: {
      type: "inperson",
      venue: "TBD",
      city: "Monterrey, NL",
    },
    status: "upcoming",
    imageUrl: "/events/Meetup07_poster.png",
    registerUrl: "https://encontrol.dev/",
  },
];
