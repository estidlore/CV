import React from "react";

import { Image } from "components/Image";
import { Link } from "components/Link";

import { about, contact, hobbies, languages, skills } from "./data";

const headerClass = "ai-center f3 flex mb2 mt4 primary5";
const contactClass = "f2 fw7 mb0 mt2";

const SidePanel = (): JSX.Element => (
  <div className={"jc-center bg-dark3 flex flex-col p6 wp30"}>
    <div className={"flex jc-center mb4"}>
      <div className={"rnd-50 p2 bdr3 bdr-primary5 wp60"}>
        <img className={"rnd-50 wp100 hp100"} src={about.photo} />
      </div>
    </div>
    <p className={"f4 mb2 primary5 ta-center"}>{about.name}</p>
    <p className={"f2 ta-center"}>{about.description}</p>
    <hr className={"my4"} />
    <p className={headerClass}>
      <Image className={"mr3"} name={"user"} />
      {"Profile"}
    </p>
    <p className={"mb2"}>{about.profile}</p>
    <p className={"fs-i"}>{about.phrase}</p>
    <p className={headerClass}>
      <Image className={"mr3"} name={"addressBook"} />
      {"Contact"}
    </p>
    <div>
      <p className={contactClass}>{"Phone"}</p>
      <Link href={`tel:+${contact.phone[0]}${contact.phone[1]}`}>
        {`(+${contact.phone[0]}) ${contact.phone[1]}`}
      </Link>
      <p className={contactClass}>{"Email"}</p>
      <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
      <p className={contactClass}>{"LinkedIn"}</p>
      <Link href={`https://${contact.linkedIn}`}>
        {`www.${contact.linkedIn}`}
      </Link>
      <p className={contactClass}>{"GitHub"}</p>
      <Link href={`https://${contact.github}`}>{`www.${contact.github}`}</Link>
    </div>
    <p className={headerClass}>
      <Image className={"mr3"} name={"language"} />
      {"Languages"}
    </p>
    <div className={"flex"}>
      <div className={"mr3"}>
        {languages.map(
          ({ name }): JSX.Element => (
            <p className={"mb1"} key={name}>{`${name}:`}</p>
          ),
        )}
      </div>
      <div>
        {languages.map(
          ({ level, name }): JSX.Element => (
            <p className={"mb1"} key={name}>
              {level}
            </p>
          ),
        )}
      </div>
    </div>
    <p className={headerClass}>
      <Image className={"mr3"} name={"code"} />
      {"Dev Skills"}
    </p>
    <div className={"flex flex-wrap"}>
      {skills
        .filter((el) => el.level >= 7)
        .sort((a, b) => b.level - a.level)
        .map(
          (skill): JSX.Element => (
            <p className={"wp50 mb1"} key={skill.name}>
              {skill.name}
            </p>
          ),
        )}
    </div>
    <p className={headerClass}>
      <Image className={"mr3"} name={"chessPawn"} />
      {"Hobbies"}
    </p>
    <div className={"flex flex-wrap"}>
      {hobbies.map(
        (hobby): JSX.Element => (
          <p className={"wp50 mb1"} key={hobby}>
            {hobby}
          </p>
        ),
      )}
    </div>
  </div>
);

export { SidePanel };
