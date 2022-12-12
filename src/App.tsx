import { basicInfo, contact, hobbies, languages, profile, skills } from "data";
import type { FC } from "react";
import React from "react";

import { CV } from "views/CV";

const App: FC = (): JSX.Element => (
  <div className={"bg-dark1 ff-arial flex jc-center"}>
    <CV
      basicInfo={basicInfo}
      contact={contact}
      hobbies={hobbies}
      languages={languages}
      profile={profile}
      skills={skills}
    />
  </div>
);

export { App };
