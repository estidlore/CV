import type { ICertification } from "types/background";

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

export { certifications };
