import { imgs } from "assets/imgs";

import type { IAbout, IContact, ILanguage, ISkill } from "./types";

const about: IAbout = {
  description: "Full-Stack Web Developer",
  name: "Estid Felipe\nLozano Reyes",
  photo: imgs.photo,
  phrase: "Today better than yesterday",
  profile:
    "Software developer with three years of experience gained mainly " +
    "through many personal projects, work experience and competitions. " +
    "Skilled in UI/UX development, algorithms and problem solving. " +
    "Constantly working on growing and acquiring multidisciplinary skills. " +
    "Known by a fast learning, creativity and " +
    "pursuit excellence in all he is and all he does.",
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
    level: "B2",
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
