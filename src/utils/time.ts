import type { IDate, IDateRange } from "types/time";

const formatDate = (el: IDate): string => `${el.year} ${el.month}`;

const formatDateRange = (el: IDateRange): string => `${
  formatDate(el.from)
} -\n ${
  el.to === "Now" ? "Present" : formatDate(el.to)
}`;

export { formatDate, formatDateRange };
