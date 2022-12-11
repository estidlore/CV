import type { FC } from "react";
import React from "react";

import type { IProgressBarProps } from "./types";

const ProgressBar: FC<IProgressBarProps> = ({
  max = 100,
  value,
}: IProgressBarProps): JSX.Element => (
  <div className={"flex rnd jc-between"}>
    <p className={"bg-primary4 mr1 px2 rnd-l"}>
      {value}
    </p>
    <div className={"bg-light1 grow rnd-r"}>
      <p
        className={"bg-primary5"}
        style={{ width: `${(100 * value / max)}%` }}
      >
        &nbsp;
      </p>
    </div>
  </div>
);

export { ProgressBar };
