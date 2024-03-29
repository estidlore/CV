import React from "react";

import { Image } from "components/Image";
import { TimeLine } from "components/TimeLine";
import {
  filterData,
  formatAcknowledgement,
  formatCertification,
  formatEducation,
  formatExperience,
} from "utils/background";

import {
  acknowledgements,
  certifications,
  education,
  experience,
} from "./data";

const headerClass = "ai-center bg-primary4 d-f f3 px4 py2 rnd";

const MainPanel = (): JSX.Element => (
  <div className={"bg-dark2 p6 wp70"}>
    <p className={headerClass}>
      <Image className={"mr3"} name={"briefcase"} />
      {"Experience"}
    </p>
    <TimeLine events={experience.filter(filterData).map(formatExperience)} />
    <p className={headerClass}>
      <Image className={"mr3"} name={"graduationCap"} />
      {"Education"}
    </p>
    <TimeLine events={education.filter(filterData).map(formatEducation)} />
    <p className={"f3 primary5"}>{"Certifications"}</p>
    <TimeLine
      events={certifications.filter(filterData).map(formatCertification)}
    />
    <p className={headerClass}>
      <Image className={"mr3"} name={"award"} />
      {"Acknowledgements"}
    </p>
    <TimeLine
      events={acknowledgements.filter(filterData).map(formatAcknowledgement)}
    />
  </div>
);

export { MainPanel };
