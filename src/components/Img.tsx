import { 
  faAddressBook,
  faBriefcase,
  faChessPawn,
  faCode,
  faExternalLink,
  faGraduationCap,
  faLanguage,
  faStar,
  faUser,
} from "imgs/fa";
import type { CSSProperties, FC } from "react";
import React from "react";

type TImg = "bullet" |
  "code" |
  "contact" |
  "education" |
  "language" |
  "link" |
  "pawn" |
  "user" |
  "work";

interface IImgProps {
  className?: string;
  img: TImg;
  style?: CSSProperties;
}

const fa: Record<TImg, string> = {
  bullet: faStar,
  code: faCode,
  contact: faAddressBook,
  education: faGraduationCap,
  language: faLanguage,
  link: faExternalLink,
  pawn: faChessPawn,
  user: faUser,
  work: faBriefcase,
};

const Img: FC<IImgProps> = ({
  className = "",
  img,
  style,
}: Readonly<IImgProps>): JSX.Element => (
  <img
    className={`comp-img ${className}`.trimEnd()}
    src={fa[img]}
    style={style}
  />
);

export type { IImgProps, TImg };
export { Img };
