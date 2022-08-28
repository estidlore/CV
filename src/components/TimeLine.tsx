import type { FC } from "react";
import React, { Fragment } from "react";

type TMonth = "Jan"
| "Feb"
| "Mar"
| "Apr"
| "May"
| "Jun"
| "Jul"
| "Ago"
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
  events
}: Readonly<ITimeLineProps>): JSX.Element => (
  <div className={""}>
    {events.map(
      ({ description, from, subtitle, title, to }: IEvent): JSX.Element => (
        <div className={"flex mt3"} key={title ?? subtitle}>
          <p className={"wp20"}>
            {`${from.year} ${from.month}${to ? ` -\n${
              to === "Present" ? to : `${to.year} ${to.month}`
            }` : ""}`}
          </p>
          <div className={"wp80"}>
            {title === undefined ? undefined : (
              <p className={"f4 mb1 primary5"}>{title}</p>
            )}
            {subtitle === undefined ? undefined : (
              <p className={"f3 mb1"}>{subtitle}</p>
            )}
            <p className={"f2"}>{description}</p>
          </div>
      </div>
      )
    )}
  </div>
)

export type { IDate, IEvent, ITimeLineProps };
export { TimeLine };
