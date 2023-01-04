import type { IDate, IDateRange } from "types/time";

interface IBackground {
  hide?: boolean;
}

interface IAcknowledgement extends IBackground {
  date: IDate;
  issuer: string;
  name: string;
}

interface ICertification extends IBackground {
  date: IDate;
  issuer: string;
  name: string;
}

interface IEducation extends IBackground {
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

interface IExperience extends IBackground {
  company: string;
  date: IDateRange;
  details: string;
  role: string;
}

export type {
  IAcknowledgement,
  IBackground,
  ICertification,
  IEducation,
  IEvent,
  IExperience,
};
