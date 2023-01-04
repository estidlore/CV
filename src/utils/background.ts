import type {
  IAcknowledgement,
  IBackground,
  ICertification,
  IEducation,
  IEvent,
  IExperience,
} from "types/background";

const filterData = (el: IBackground): boolean => !el.hide;

const formatAcknowledgement = (el: IAcknowledgement): IEvent => ({
  date: el.date,
  description: el.issuer,
  subtitle: el.name,
});

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

export {
  filterData,
  formatAcknowledgement,
  formatCertification,
  formatEducation,
  formatExperience,
};
