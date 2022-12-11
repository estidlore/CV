import type { FC } from "react";
import React from "react";

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

const TimeLine: FC<ITimeLineProps> = ({
  events,
}: ITimeLineProps): JSX.Element => (
  <div className={"mt5"}>
    {events.map(
      ({ description, from, subtitle, title, to }: IEvent): JSX.Element => (
        <div className={"flex mt4"} key={title ?? subtitle}>
          <p className={"wp20"}>
            {`${from.year} ${from.month}${to ? ` -\n${
              to === "Present" ? to : `${to.year} ${to.month}`
            }` : ""}`}
          </p>
          <div className={"wp80"}>
            {title === undefined ? undefined : (
              <p className={"f3 mb2 primary5"}>{title}</p>
            )}
            {subtitle === undefined ? undefined : (
              <p className={"mb2"}>{subtitle}</p>
            )}
            <p>{description}</p>
          </div>
        </div>
      )
    )}
  </div>
);

export type { IDate, IEvent, ITimeLineProps };
export { TimeLine };
