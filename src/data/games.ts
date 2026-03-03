import type { TeamLinks, ReleaseDate, StoreLinks, Developer, Game } from "./common";


export const developers = [
  {
    id: 1,
    name: "Playstorm Studios",
    logoUrl: undefined,
    links: {
      website: "https://encontrol.dev",
    }
  },
  {
    id: 2,
    name: "Pretty Scar",
    logoUrl:
      "https://pbs.twimg.com/profile_images/1902760092984070144/q8AxPHop_400x400.jpg",
    links: {
      bluesky: "https://bsky.app/profile/prettyscar.dev",
    },
  },
  {
    id: 3,
    name: "Don Attico",
    logoUrl:
      "https://cdn.bsky.app/img/avatar/plain/did:plc:sdpi3a4hw672aq26weu3qdud/bafkreieplw27vqutl7arbh4xa2djojetwv6y5itpnitw3lwljnl4o26oia@jpeg",
    links: {
      bluesky: "https://bsky.app/profile/whodunnitvn.bsky.social",
    },
  },
  {
    id: 4,
    name: "Funky Can Creative",
    logoUrl:
      "https://avatars.fastly.steamstatic.com/a5226947eb4f619efb9f9b7b1823587473bbbec4_full.jpg",
    links: {
      bluesky: "https://bsky.app/profile/whodunnitvn.bsky.social",
      twitter: "https://x.com/FunkyCanDev",
      instagram: "https://www.instagram.com/funkycancreative/"
    },
  },
  {
    id: 5,
    name: "Headless",
    logoUrl:
      "https://avatars.fastly.steamstatic.com/baf43430b4ea204c1068f2c9c5bb1f3346c0660b_full.jpg",
    links: {
      twitter: "https://x.com/Headless_Games",
      website: "https://www.headlessvideogames.com/"

    },
  },
  {
    id: 6,
    name: "Pixel Perfect Studios",
    logoUrl:
      "https://i0.wp.com/www.imcsw.com/wp-content/uploads/2019/05/cropped-PPStudio-Logo-Round.png",
    links: {
      website: "https://www.pixelperfectstudio.mx/"

    },
  },
  {
    id: 7,
    name: "CalixJumio",
    logoUrl:
      "https://cdn.bsky.app/img/avatar/plain/did:plc:lwugoxbxtqp7kaimrjwx2nxz/bafkreifrgr33upv6p2yamapmp5txiweiwo3zblj3xj5palak3iuidf5gq4@jpeg",
    links: {
      website: "https://calixjumio.wordpress.com/",
      bluesky: "https://bsky.app/profile/calixjumio.me"

    },
  },


]

export function getDev(name: string): Developer {
  const dev = developers.find((d) => d.name === name)
  if (!dev) throw new Error(`Developer "${name}" not found`)
  return dev
}

export const games: Game[] = [
  {
    id: 1,
    slug: "Eagle-knight-paradox",
    title: "Eagle Knight Paradox",
    description: "Platformer chidongo",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3008700/library_600x900_2x.jpg?t=1765331087",
    developers:
      [getDev("Playstorm Studios")]
    ,
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
    developers:
      [getDev("Pretty Scar")]
    ,
    store: {
      steam: "https://store.steampowered.com/app/3151660",
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
    developers: [getDev("Don Attico")],
    store: {
      steam: "https://store.steampowered.com/app/3851280/WHODUNNIT/",
      itch: "https://donattico.itch.io/whodunnit",
    },
    release: { type: "year", value: 2026 },
  },
  {
    id: 4,
    slug: "PopSlinger",
    title: "PopSlinger",
    description:
      "Join a magical girl with a soda-powered arsenal on a dreamy quest to save her home! In this part beat-‘em-up, part musical shooter, you’ll experience the whimsical story of Ria and Gin as they fight against sinister invaders from another dimension…and maybe even groove to that funky beat!",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/1928320/library_600x900_2x.jpg?t=1693269281",
    developers: [getDev("Funky Can Creative")],
    store: {
      steam: "https://store.steampowered.com/app/1928320/PopSlinger",
      switch: "https://www.nintendo.com/us/store/products/popslinger-switch/"
    },
    release: { type: "date", value: "2022-04-14" },
  },
  {
    id: 5,
    slug: "PopSlinger2",
    title: "PopSlinger Vol. 2 - Loveless",
    description:
      "Return to the PopSlinger universe in this coffee-fueled sequel! Join an elite agent and a digital idol on a mission to rescue a lost heroine in a world full of vibrant chaos. Face new enemies, uncover the mysteries of the Purple District, and groove to a freshly brewed beat!",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3195370/library_600x900_2x.jpg?t=1748658816",
    developers: [getDev("Funky Can Creative")],
    store: {
      steam: "https://store.steampowered.com/app/3195370/PopSlinger_Vol_2__Loveless",
      switch: "https://www.nintendo.com/us/store/products/popslinger-vol-2-loveless-switch/"
    },
    release: { type: "date", value: "2024-10-09" },
  },
  {
    id: 6,
    slug: "Underboard",
    title: "Underboard",
    description:
      "Tactical team-building roguelike auto-battler with active and passive playstyles. Draft a team as you explore maps full of monsters, build synergies, equip items and cast spells to support your team during battles and help them escape the Underboard. ",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2376610/library_600x900_2x.jpg?t=1761521805",
    developers: [getDev("Headless")],
    store: {
      steam: "https://store.steampowered.com/app/2376610/Underboard/",
    },
    release: { type: "date", value: "2026-02-06" },
  },
  {
    id: 7,
    slug: "Omnomspicturecollection",
    title: "Om Nom's picture collection",
    description:
      "An amazing collaboration with Legends of Learning and Zeptolab. This fun and engaging game will help your kids learn about the different types of energy movement through physics-based puzzles and beutiful collectibles. A game fully designed and developed at Pixel Perfect Studio.",
    imageUrl:
      "https://i0.wp.com/www.imcsw.com/wp-content/uploads/2025/10/OmNomTitle-ezgif.com-video-to-gif-converter-1.gif?w=3840&amp;ssl=1",
    developers: [getDev("Pixel Perfect Studios")],
    store: {
      website: "https://games.legendsoflearning.com/game/cut-the-rope-om-nom-s-picture-collection/4581?learning_objective_id=985&partner=legends-developer"
    },
    release: { type: "date", value: "2026-02-06" },
  },
  {
    id: 8,
    slug: "SuperCraneHD",
    title: "Super Crane HD",
    description:
      "Retro match 3 about a Bug juggling at his job, BUT NOW IT'S BETTER Match 3 drops to clear them, but your tool changes constantly, so watch out! Be a Bug, Do a Work, Match a 3",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2976620/library_600x900_2x.jpg?t=1715316243",
    developers: [getDev("CalixJumio")],
    store: {
      steam: "https://store.steampowered.com/app/2976620/Super_Crane_HD/"
    },
    release: { type: "tbd" },
  },
];
