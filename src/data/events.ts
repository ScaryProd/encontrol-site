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
    date: "2023-04-20",
    location: {
      type: "inperson",
      venue: "Nombre del lugar",
      city: "Monterrey, NL",
    },
    status: "past",
    recap: "Juntada de networking!.",
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
  },
  {
    id: 3,
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
    registerUrl:
      "https://www.eventbrite.com.mx/e/ladweek-2026-tickets-1781911287629",
  },
];
