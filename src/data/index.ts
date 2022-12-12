import { imgs } from "assets/imgs";
import type { IEvent } from "components/TimeLine/types";
import type {
  IAbout,
  IBasicInfo,
  IContact,
  ILanguage,
  ISkill
} from "views/CV/types";

const basicInfo: IBasicInfo = {
  description: "Full-Stack Web Developer",
  name: "Estid Felipe\nLozano Reyes",
  photo: imgs.photo,
};

const complementaryEducation: IEvent[] = [
  {
    description: "Udemy",
    from: {
      month: "Nov",
      year: 2022,
    },
    subtitle: "Databases With Python",
  },
  {
    description: "Cisco",
    from: {
      month: "Oct",
      year: 2022,
    },
    subtitle: "Introduction To IoT",
  },
  {
    description: "Coursera",
    from: {
      month: "Jan",
      year: 2022,
    },
    subtitle: "TypeScript Variables And Data Types",
  },
  {
    description: "Coursera",
    from: {
      month: "Jan",
      year: 2022,
    },
    subtitle: "Introduction To User Experience Design",
  },
  {
    description: "ED Team",
    from: {
      month: "Dec",
      year: 2021,
    },
    subtitle: "React Js",
  },
  {
    description: "Coursera",
    from: {
      month: "Oct",
      year: 2021,
    },
    subtitle: "Learning How To Learn",
  },
];

const contact: IContact = {
  email: "estidlore@outlook.com",
  github: "github.com/estidlore",
  linkedIn: "linkedin.com/in/estidlore",
  phone: [57, 3194998015],
};

const education: IEvent[] = [
  {
    description: "I have been member of several groups of interest: " +
    "Robotics, Web Development, Videogames, Human Centered Design, " +
    "Automated Software Configuration, Growth (Psychology).",
    from: {
      month: "Jan",
      year: 2018,
    },
    subtitle: "Informatics Engineering",
    title: "Universidad de La Sabana",
    to: "Present",
  },
];

const experience: IEvent[] = [
  {
    description: "UX team's developer for ARM platform. Main responsible of " +
      "the platform's storybook development and new designs implementation. " +
      "Furthermore, designed and contributed to design some features.",
    from: {
      month: "Apr",
      year: 2022,
    },
    subtitle: "Fluid Attacks",
    title: "Security Developer",
    to: {
      month: "Sep",
      year: 2022,
    },
  },
  {
    description: "Designer and developer of web apps for Dirección Central " +
      "De Estudiantes department, and maintain and improve the exitent ones.",
    from: {
      month: "Feb",
      year: 2021,
    },
    subtitle: "Universidad de La Sabana",
    title: "Web developer",
    to: {
      month: "Jan",
      year: 2022,
    },
  },
  {
    description: "Voluntary as leader, speaker and mentor in activities, " +
      "competitions, groups and events related to IEEE Computer Society and " +
      "informatics engineering.",
    from: {
      month: "Jan",
      year: 2021,
    },
    subtitle: "Universidad de La Sabana",
    title: "IEEE Computer Society Vicepresident",
    to: {
      month: "Jan",
      year: 2022,
    },
  },
];

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

export {
  basicInfo,
  complementaryEducation,
  contact,
  education,
  experience,
  hobbies,
  languages,
  profile,
  skills,
};
