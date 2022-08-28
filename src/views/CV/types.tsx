interface IAbout {
  profile: string;
  phrase: string;
}

interface IBasicInfo {
  description?: string;
  name: string;
  photo: string;
}

interface IContact {
  email: string;
  github?: string;
  linkedIn?: string;
  phone: [number, number];
}

interface ILanguage {
  name: string;
  level: "Starting" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native";
}

interface ISkill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export type { IBasicInfo, IContact, ILanguage, IAbout, ISkill };
