type TMonth = "Jan"
| "Feb"
| "Mar"
| "Apr"
| "May"
| "Jun"
| "Jul"
| "Aug"
| "Sep"
| "Oct"
| "Nov"
| "Dec";

interface IDate {
  month: TMonth;
  year: number;
}

interface IEvent {
  description: string;
  from: IDate;
  subtitle?: string;
  title?: string;
  to?: IDate | "Present";
}

interface ITimeLineProps {
  events: IEvent[];
}

export type { IDate, IEvent, ITimeLineProps, TMonth };
