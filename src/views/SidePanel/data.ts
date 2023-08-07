import { imgs } from "assets/imgs";

import type { IAbout, IContact, ILanguage, ISkill } from "./types";

const about: IAbout = {
  description: "Web & Mobile Developer",
  name: "Estid Felipe\nLozano Reyes",
  photo: imgs.photo,
  phrase: "Today better than yesterday",
  profile:
    "Full-stack software developer specialized in front-end " +
    "with 3+ years of hands-on experience. " +
    "Skilled in UI/UX, " +
    "algorithms (optimization, data structures, etc.) and problem solving.",
};

const contact: IContact = {
  email: "estidlore@outlook.com",
  github: "github.com/estidlore",
  linkedIn: "linkedin.com/in/estidlore",
  phone: [57, 3194998015],
};

const hobbies: string[] = [
  "Learning",
  "Chess",
  "Anime",
  "Writing",
  "Reading",
  "Drawing",
];

const languages: ILanguage[] = [
  {
    level: "Native",
    name: "Spanish",
  },
  {
    level: "C1",
    name: "English",
  },
  {
    level: "A1",
    name: "French",
  },
];

const skills: ISkill[] = [
  {
    level: 8,
    name: "Bootstrap",
  },
  {
    level: 6,
    name: "C#",
  },
  {
    level: 9,
    name: "CSS & SCSS",
  },
  {
    level: 6,
    name: "Flutter",
  },
  {
    level: 8,
    name: "HTML",
  },
  {
    level: 8,
    name: "Java",
  },
  {
    level: 8,
    name: "Javascript",
  },
  {
    level: 8,
    name: "Jest",
  },
  {
    level: 7,
    name: "Python",
  },
  {
    level: 8,
    name: "React",
  },
  {
    level: 6,
    name: "SQL & NoSQL",
  },
  {
    level: 8,
    name: "Typescript",
  },
];

export { about, contact, hobbies, languages, skills };
