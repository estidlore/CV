import type { FC } from "react";
import React from "react";

import {
  basicInfo,
  complementaryEducation,
  contact,
  education,
  experience,
  hobbies,
  languages,
  profile,
  skills,
} from "data/cvInfo";
import { CV } from "views/CV";

const App: FC = (): JSX.Element => (
  <div className={"bg-dark1 flex jc-center"}>
    <CV
      basicInfo={basicInfo}
      complementaryEducation={complementaryEducation}
      contact={contact}
      education={education}
      experience={experience}
      hobbies={hobbies}
      languages={languages}
      profile={profile}
      skills={skills}
    />
  </div>
);

export { App };
