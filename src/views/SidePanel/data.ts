import { imgs } from "assets/imgs";

import type {
  IAbout,
  IBasicInfo,
  IContact,
  ILanguage,
  ISkill
} from "./types";

const basicInfo: IBasicInfo = {
  description: "Full-Stack Web Developer",
  name: "Estid Felipe\nLozano Reyes",
  photo: imgs.photo,
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

const profile: IAbout = {
  phrase: "Today better than yesterday",
  profile: "Software developer with three years of experience. " +
  "Skilled in UI/UX development, algorithms and problem solving. " +
  "Constantly working on growing and acquiring multidisciplinary skills. " +
  "Known by a fast learning, creativity and " +
  "pursuit excellence in all he is and all he does.",
};

const skills: ISkill[] = [
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
    level: 7,
    name: "Python",
  },
  {
    level: 8,
    name: "React",
  },
  {
    level: 8,
    name: "Typescript",
  },
];

skills.sort((a, b) => b.level - a.level);

export { basicInfo, contact, hobbies, languages, profile, skills };
