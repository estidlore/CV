import React from "react";

import { formatDate, formatDateRange } from "utils/time";

import type { ITimeLineProps } from "./types";

const TimeLine = ({ events }: ITimeLineProps): JSX.Element => (
  <div className={"my4"}>
    {events.map(
      ({ date, description, subtitle, title }): JSX.Element => (
        <div className={"flex my3"} key={title ?? subtitle}>
          <p className={"wp20"}>
            {"month" in date ? formatDate(date) : formatDateRange(date)}
          </p>
          <div className={"wp80"}>
            {title === undefined ? undefined : (
              <p className={"f2 mb1 primary5"}>{title}</p>
            )}
            {subtitle === undefined ? undefined : (
              <p className={"mb1"}>{subtitle}</p>
            )}
            <p>{description}</p>
          </div>
        </div>
      ),
    )}
  </div>
);

export { TimeLine };
