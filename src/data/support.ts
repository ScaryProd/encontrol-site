export type Supporter = {
  id: number;
  name: string;
  description: string;
  date: string;
  logo: string;
};

export const supporters: Supporter[] = [
  {
    id: 1,
    name: "JetBrains",
    description:
      "Copyright © 2026 JetBrains s.r.o. JetBrains and the JetBrains logo are trademarks of JetBrains s.r.o.",
    date: "30/6/2026",
    logo: `support\jetbrains-mono-white.svg`,
  },
];
