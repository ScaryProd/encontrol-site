# Contributing

## Adding your game

1. Fork the repo
2. Open `src/data/games.ts`
3. Add your game to the `games` array:

```ts
{
  id: 3, // use the next available id
  title: "Your Game Title",
  description: "One sentence about your game.",
  imageUrl: "https://your-image-url.jpg", // Steam header image recommended
  team: {
    name: "Your Team or Username",
    url: "https://your-social-or-site.com",
  },
  release: { type: "year", value: 2026 },
}
```

4. Submit a PR

### Release date options

```ts
{ type: "date",    value: "2026-03-15" } // specific date
{ type: "year",    value: 2026 }         // release year
{ type: "quarter", value: "Q2 2026" }    // release quarter
{ type: "tbd" }                          // not yet known
```

Make sure your entry follows the `Game` type or TypeScript will reject it.
