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
    date: {
      month: "Nov",
      year: 2022,
    },
    description: "Udemy",
    subtitle: "Databases With Python",
  },
  {
    date: {
      month: "Oct",
      year: 2022,
    },
    description: "Cisco",
    subtitle: "Introduction To IoT",
  },
  {
    date: {
      month: "Jan",
      year: 2022,
    },
    description: "Coursera",
    subtitle: "TypeScript Variables And Data Types",
  },
  {
    date: {
      month: "Jan",
      year: 2022,
    },
    description: "Coursera",
    subtitle: "Introduction To User Experience Design",
  },
  {
    date: {
      month: "Dec",
      year: 2021,
    },
    description: "ED Team",
    subtitle: "React Js",
  },
  {
    date: {
      month: "Oct",
      year: 2021,
    },
    description: "Coursera",
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
    date: {
      from: {
        month: "Jan",
        year: 2018,
      },
      to: "Now",
    },
    description: "I have been member of several groups of interest: " +
    "Robotics, Web Development, Videogames, Human Centered Design, " +
    "Automated Software Configuration, Growth (Psychology).",
    subtitle: "Informatics Engineering",
    title: "Universidad de La Sabana",
  },
];

const experience: IEvent[] = [
  {
    date: {
      from: {
        month: "Apr",
        year: 2022,
      },
      to: {
        month: "Sep",
        year: 2022,
      },
    },
    description: "UX team's developer for ARM platform. Main responsible of " +
      "the platform's storybook development and new designs implementation. " +
      "Furthermore, designed and contributed to design some features.",
    subtitle: "Fluid Attacks",
    title: "Security Developer",
  },
  {
    date: {
      from: {
        month: "Feb",
        year: 2021,
      },
      to: {
        month: "Jan",
        year: 2022,
      },
    },
    description: "Designer and developer of web apps for Dirección Central " +
      "De Estudiantes department, and maintain and improve the exitent ones.",
    subtitle: "Universidad de La Sabana",
    title: "Web developer",
  },
  {
    date: {
      from: {
        month: "Jan",
        year: 2021,
      },
      to: {
        month: "Jan",
        year: 2022,
      },
    },
    description: "Voluntary as leader, speaker and mentor in activities, " +
      "competitions, groups and events related to IEEE Computer Society and " +
      "informatics engineering.",
    subtitle: "Universidad de La Sabana",
    title: "IEEE Computer Society Vicepresident",
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
