import type { FC } from "react";
import React, { Fragment } from "react";

import { Image } from "components/Image";
import { Link } from "components/Link";
import { ProgressBar } from "components/ProgressBar";

import {
  basicInfo,
  contact,
  hobbies,
  languages,
  profile,
  skills,
} from "./data";

const SidePanel: FC = (): JSX.Element => (
  <div className={"SidePanel bg-dark3 p6"}>
    <div className={"flex jc-center mb4"}>
      <img className={"rnd-50 wp50"} src={basicInfo.photo} />
    </div>
    <p className={"f4 mb2 primary5 ta-center"}>
      {basicInfo.name}
    </p>
    <p className={"f2 ta-center"}>
      {basicInfo.description}
    </p>
    <hr className={"my4"} />
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Image className={"mr3"} name={"user"} />
      {"Profile"}
    </p>
    <p className={"mb2"}>{profile.profile}</p>
    <p className={"fs-i"}>{profile.phrase}</p>
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Image className={"mr3"} name={"addressBook"} />
      {"Contact"}
    </p>
    <div className={"flex"}>
      <div className={"mr3"}>
        <p className={"mb1"}>{"Phone:"}</p>
        <p className={"mb1"}>{"Email:"}</p>
        <p className={"mb1"}>{"LinkedIn:"}</p>
        <p className={"mb1"}>{"Github:"}</p>
      </div>
      <div>
        <Link
          className={"mb1"}
          href={`tel:+${contact.phone[0]}${contact.phone[1]}`}
        >
          {`(+${contact.phone[0]}) ${contact.phone[1]}`}
        </Link>
        <Link className={"mb1"} href={`mailto:${contact.email}`}>
          {contact.email}
        </Link>
        <Link className={"mb1"} href={`https://${contact.linkedIn}`}>
          {`www.${contact.linkedIn}`}
        </Link>
        <Link className={"mb1"} href={`https://${contact.github}`}>
          {`www.${contact.github}`}
        </Link>
      </div>
    </div>
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Image className={"mr3"} name={"language"} />
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
          <p className={"mb1"} key={name}>{level}</p>
        ))}
      </div>
    </div>
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Image className={"mr3"} name={"code"} />
      {"Dev Skills"}
    </p>
    <div className={"flex flex-wrap"}>
      {skills.map(({ level, name }): JSX.Element => (
        <Fragment key={name}>
          <p className={"mb1 wp40"}>
            {`${name}:`}
          </p>
          <div className={"mb1 wp60"}>
            <ProgressBar max={10} value={level} />
          </div>
        </Fragment>
      ))}
    </div>
    <p className={"ai-center f3 flex mb3 mt5 primary5"}>
      <Image className={"mr3"} name={"chessPawn"} />
      {"Hobbies"}
    </p>
    <div className={"flex flex-wrap"}>
      {hobbies.map((hobby): JSX.Element => (
        <p className={"wp50 mb1"} key={hobby}>
          <Image className={"f1 mr3"} name={"star"} />
          {hobby}
        </p>
      ))}
    </div>
  </div>
);

export { SidePanel };
