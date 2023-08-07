type TMonth =
  | "Apr"
  | "Aug"
  | "Dec"
  | "Feb"
  | "Jan"
  | "Jul"
  | "Jun"
  | "Mar"
  | "May"
  | "Nov"
  | "Oct"
  | "Sep";

interface IDate {
  month: TMonth;
  year: number;
}

interface IDateRange {
  from: IDate;
  to: IDate | "Now";
}

export type { IDate, IDateRange };
