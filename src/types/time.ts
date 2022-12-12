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

interface IDateRange {
  from: IDate;
  to: IDate | "Now";
}

export type { IDate, IDateRange };
