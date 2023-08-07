import type { IExperience } from "types/background";

const experience: IExperience[] = [
  {
    company: "Universidad de La Sabana",
    date: {
      from: {
        month: "Mar",
        year: 2023,
      },
      to: {
        month: "Aug",
        year: 2023,
      },
    },
    details:
      "- Collaborate with designers to create simple and intuitive UI/UX" +
      "\n- Implement tests, CI/CD workflows, and behavior-driven issues" +
      "\n- Support less experienced team members contributing to their growth" +
      "\nReact Native, Typescript, TDD, BDD, Firebase, CI/CD, Express",
    role: "React Native Full-stack Developer",
  },
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
    details:
      "- Cooperate with designers to adopt atomic design" +
      "\n- Optimize and enhance core reusable components" +
      "\n- Implement new design and features of core platform" +
      "\nReact, Typescript, Styled-components, Storybook, Jest, Linux, Python",
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
    details:
      "- Migrate html website to React.js and bootstrap" +
      "\n- Enhance web with simple, responsive and intuitive UI/UX" +
      "\n- Provide custom analytics and graphics with pdf & email reports" +
      "\nReact, Javascript, Bootstrap, Chart, SCSS, HTML, CSS",
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
    details:
      "Volunteer as leader, speaker and mentor in activities, " +
      "competitions, groups and events related to IEEE Computer Society and " +
      "informatics engineering.",
    hide: true,
    role: "IEEE Computer Society Vicepresident",
  },
];

export { experience };
