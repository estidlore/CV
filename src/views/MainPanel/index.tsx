import type { FC } from "react";
import React from "react";

import { Image } from "components/Image";
import { TimeLine } from "components/TimeLine";
import {
  formatCertification,
  formatEducation,
  formatExperience,
} from "utils/background";

import { certifications, education, experience } from "./data";

const MainPanel: FC = (): JSX.Element => (
  <div className={"MainPanel bg-dark2 p6"}>
    <p className={"ai-center bg-primary4 d-f f4 px4 py3 rnd"}>
      <Image className={"mr3"} name={"briefcase"} />
      {"Experience"}
    </p>
    <TimeLine events={experience.map(formatExperience)} />
    <p className={"ai-center bg-primary4 d-f f4 mt6 px4 py3 rnd"}>
      <Image className={"mr3"} name={"graduationCap"} />
      {"Education"}
    </p>
    <p className={"f4 mt5 primary5"}>{"Formal"}</p>
    <TimeLine events={education.map(formatEducation)} />
    <p className={"f4 mt5 primary5"}>{"Certifications"}</p>
    <TimeLine events={certifications.map(formatCertification)} />
  </div>
);

export { MainPanel };
