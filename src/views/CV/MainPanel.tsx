import type { FC } from "react";
import React from "react";

import type { IEvent } from "components/TimeLine";
import { Img, TimeLine } from "components";

interface IMainPanelProps {
  complementaryEducation?: IEvent[];
  education: IEvent[];
  experience: IEvent[];
}

const MainPanel: FC<IMainPanelProps> = ({
  complementaryEducation,
  education,
  experience,
}: Readonly<IMainPanelProps>): JSX.Element => (
  <div className={"bg-dark2 p6 wp70"}>
    <p className={"ai-center bg-primary4 f6 flex py2 px4 rnd"}>
      <Img className={"mr2"} img={"work"} />
      {"Experience"}
    </p>
    <TimeLine events={experience} />
    <p className={"ai-center bg-primary4 f6 flex mt6 py2 px4 rnd"}>
      <Img className={"mr2"} img={"education"} />
      {"Education"}
    </p>
    {complementaryEducation === undefined ? undefined : (
      <p className={"f5 mt5 primary5"}>{"Formal"}</p>
    )}
    <TimeLine events={education} />
    <p className={"f5 mt5 primary5"}>{"Complementary"}</p>
    {complementaryEducation === undefined ? undefined : (
      <TimeLine events={complementaryEducation} />
    )}
  </div>
);

export type { IMainPanelProps };
export { MainPanel };
