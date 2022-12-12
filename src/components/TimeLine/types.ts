import type { IDate, IDateRange } from "types/time";

interface IEvent {
  date: IDate | IDateRange;
  description: string;
  subtitle?: string;
  title?: string;
}

interface ITimeLineProps {
  events: IEvent[];
}

export type { IEvent, ITimeLineProps };
