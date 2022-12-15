import type {
  IAcknowledgement,
  ICertification,
  IEducation,
  IExperience,
} from "types/background";

const acknowledgements: IAcknowledgement[] = [
  {
    date: {
      month: "Oct",
      year: 2022,
    },
    issuer: "Universidad de La Sabana & NTT Data",
    name: "Winner team of Sabana Hack",
  },
  {
    date: {
      month: "Sep",
      year: 2022,
    },
    issuer: "IEEE Universidad de La Sabana",
    name: "Winner of Sabana Code Challenge",
  },
  {
    date: {
      month: "Nov",
      year: 2021,
    },
    issuer: "Universidad de La Sabana",
    name: "2nd Place in Sabana Game Jam",
  },
  {
    date: {
      month: "Nov",
      year: 2020,
    },
    issuer: "Universidad de La Sabana",
    name: "Mentor in Sabana Hack Junior"
  },
  {
    date: {
      month: "Oct",
      year: 2017,
    },
    issuer: "Colombia's Government",
    name: "Scholarship Ser Pilo Paga 4"
  }
];

const certifications: ICertification[] = [
  {
    date: {
      month: "Nov",
      year: 2022,
    },
    issuer: "Udemy",
    name: "Databases With Python",
  },
  {
    date: {
      month: "Oct",
      year: 2022,
    },
    hide: true,
    issuer: "Cisco",
    name: "Introduction To IoT",
  },
  {
    date: {
      month: "Jan",
      year: 2022,
    },
    issuer: "Coursera",
    name: "TypeScript Variables And Data Types",
  },
  {
    date: {
      month: "Jan",
      year: 2022,
    },
    issuer: "Coursera",
    name: "Introduction To User Experience Design",
  },
  {
    date: {
      month: "Dec",
      year: 2021,
    },
    issuer: "ED Team",
    name: "React Js",
  },
  {
    date: {
      month: "Oct",
      year: 2021,
    },
    issuer: "Coursera",
    name: "Learning How To Learn",
  },
];

const education: IEducation[] = [
  {
    date: {
      from: {
        month: "Jan",
        year: 2018,
      },
      to: "Now",
    },
    details: "Member of several groups of interest: " +
    "Robotics, Web Development, Videogames, Human Centered Design, " +
    "Automated Software Configuration, Growth (Psychology).",
    institution: "Universidad de La Sabana",
    title: "Informatics Engineering",
  },
];

const experience: IExperience[] = [
  {
    company: "Fluid Attacks",
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
    details: "UX team's developer for ARM platform. Main responsible of " +
      "the platform's storybook development and new designs implementation. " +
      "Furthermore, designed and contributed to design some features.",
    role: "Security Developer",
  },
  {
    company: "Universidad de La Sabana",
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
    details: "Designer and developer of web apps for Dirección Central " +
      "De Estudiantes department, and maintain and improve the exitent ones.",
    role: "Web developer",
  },
  {
    company: "Universidad de La Sabana",
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
    details: "Volunteer as leader, speaker and mentor in activities, " +
      "competitions, groups and events related to IEEE Computer Society and " +
      "informatics engineering.",
    role: "IEEE Computer Society Vicepresident",
  },
];

export { acknowledgements, certifications, education, experience };
