type TLanguageLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native";
type TSkillLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface IAbout {
  description?: string;
  name: string;
  photo: string;
  profile: string;
  phrase: string;
}

interface IContact {
  email: string;
  github: string;
  linkedIn: string;
  phone: [number, number];
}

interface ILanguage {
  level: TLanguageLevel;
  name: string;
}

interface ISkill {
  level: TSkillLevel;
  name: string;
}

export type { IAbout, IContact, ILanguage, ISkill };
