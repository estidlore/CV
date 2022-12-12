import type {
  ICertification,
  IEducation,
  IEvent,
  IExperience,
} from "types/background";

const formatCertification = (el: ICertification): IEvent => ({
  date: el.date,
  description: el.issuer,
  subtitle: el.name,
});

const formatEducation = (el: IEducation): IEvent => ({
  date: el.date,
  description: el.details,
  subtitle: el.institution,
  title: el.title,
});

const formatExperience = (el: IExperience): IEvent => ({
  date: el.date,
  description: el.details,
  subtitle: el.company,
  title: el.role,
});

export { formatCertification, formatEducation, formatExperience };
