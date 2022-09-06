import type { FC } from "react";
import React, { Fragment } from "react";

import { Img, Link, ProgressBar } from "components";

import type {
  IAbout,
  IBasicInfo,
  IContact,
  ILanguage,
  ISkill
} from "views/CV/types";

interface ISidePanelProps {
  basicInfo: IBasicInfo;
  contact: IContact;
  hobbies: string[];
  languages: ILanguage[];
  profile: IAbout;
  skills: ISkill[];
}

const SidePanel: FC<ISidePanelProps> = ({
  basicInfo: { description, name, photo },
  contact: { email, phone, github, linkedIn },
  hobbies,
  languages,
  profile: { profile, phrase },
  skills,
}: Readonly<ISidePanelProps>): JSX.Element => (
  <div className={"bg-dark3 p6 wp30"}>
    <div className={"flex jc-center mb4"}>
      <img className={"rnd-50 wp50"} src={photo} />
    </div>
    <p className={"f4 mb2 primary5 ta-center"}>
      {name}
    </p>
    <p className={"f2 ta-center"}>
      {description}
    </p>
    <hr className={"my4"} />
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Img className={"mr3"} img={"user"} />
      {"Profile"}
    </p>
    <p className={"mb2"}>{profile}</p>
    <p className={"fs-i"}>{phrase}</p>
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Img className={"mr3"} img={"contact"} />
      {"Contact"}
    </p>
    <div className={"flex"}>
      <div className={"mr3"}>
        <p className={"mb1"}>{"Phone:"}</p>
        <p className={"mb1"}>{"Email:"}</p>
        {linkedIn === undefined ? undefined : (
          <p className={"mb1"}>{"LinkedIn:"}</p>
        )}
        {github === undefined ? undefined : (
          <p className={"mb1"}>{"Github:"}</p>
        )}
      </div>
      <div>
        <Link className={"mb1"} href={`tel:+${phone[0]}${phone[1]}`}>
          {`(+${phone[0]}) ${phone[1]}`}
        </Link>
        <Link className={"mb1"} href={`mailto:${email}`}>
          {email}
        </Link>
        {linkedIn === undefined ? undefined : (
          <Link className={"mb1"} href={`https://${linkedIn}`}>
            {`www.${linkedIn}`}
          </Link>
        )}
        {github === undefined ? undefined : (
          <Link className={"mb1"} href={`https://${github}`}>
            {`www.${github}`}
          </Link>
        )}
      </div>
    </div>
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Img className={"mr3"} img={"language"} />
      {"Languages"}
    </p>
    <div className={"flex"}>
      <div className={"mr3"}>
        {languages.map(({ name }): JSX.Element => (
          <p className={"mb1"} key={name}>{`${name}:`}</p>
        ))}
      </div>
      <div>
        {languages.map(({ level, name }): JSX.Element => (
          <p className={"mb1"} key={name}>{`(${level})`}</p>
        ))}
      </div>
    </div>
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Img className={"mr3"} img={"code"} />
      {"Dev Skills"}
    </p>
    <div className={"flex flex-wrap"}>
      {skills.map(({ level, name }): JSX.Element => (
        <Fragment key={name}>
          <p className={"mb1 wp40"}>
            {`${name}:`}
          </p>
          <div className={"mb1 wp60"}>
            <ProgressBar value={level} max={10} />
          </div>
        </Fragment>
      ))}
    </div>
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Img className={"mr3"} img={"pawn"} />
      {"Hobbies"}
    </p>
    <div className={"flex flex-wrap"}>
      {hobbies.map((hobby: string): JSX.Element => (
        <p className={"wp50 mb1"} key={hobby}>
          <Img
            className={"f1 mr3"}
            img={"bullet"}
          />
          {hobby}
        </p>
      ))}
    </div>
  </div>
);

export type { IBasicInfo, IContact, ILanguage, ISkill, ISidePanelProps };
export { SidePanel };
