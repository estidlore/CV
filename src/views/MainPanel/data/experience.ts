import type { IExperience } from "types/background";

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

export { experience };
