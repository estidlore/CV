import type { IDate, IDateRange } from "types/time";

interface ICertification {
  date: IDate;
  issuer: string;
  name: string;
}

interface IEducation {
  date: IDateRange;
  details: string;
  institution: string;
  title: string;
}

interface IEvent {
  date: IDate | IDateRange;
  description: string;
  subtitle?: string;
  title?: string;
}

interface IExperience {
  company: string;
  date: IDateRange;
  details: string;
  role: string;
}

export type { ICertification, IEducation, IEvent, IExperience };
