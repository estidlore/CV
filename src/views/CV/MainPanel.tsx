import type { FC } from "react";
import React from "react";

import { Image } from "components/Image";
import { TimeLine } from "components/TimeLine";
import type { IEvent } from "components/TimeLine/types";

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
  <div className={"MainPanel bg-dark2 p6"}>
    <p className={"ai-center bg-primary4 d-f f4 px4 py3 rnd"}>
      <Image className={"mr3"} name={"briefcase"} />
      {"Experience"}
    </p>
    <TimeLine events={experience} />
    <p className={"ai-center bg-primary4 d-f f4 mt6 px4 py3 rnd"}>
      <Image className={"mr3"} name={"graduationCap"} />
      {"Education"}
    </p>
    {complementaryEducation === undefined ? undefined : (
      <p className={"f4 mt5 primary5"}>{"Formal"}</p>
    )}
    <TimeLine events={education} />
    <p className={"f4 mt5 primary5"}>{"Complementary"}</p>
    {complementaryEducation === undefined ? undefined : (
      <TimeLine events={complementaryEducation} />
    )}
  </div>
);

export type { IMainPanelProps };
export { MainPanel };
