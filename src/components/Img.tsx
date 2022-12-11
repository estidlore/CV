import type { CSSProperties, FC } from "react";
import React from "react";

import { faImgs } from "assets/imgs";

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
  bullet: faImgs.star,
  code: faImgs.code,
  contact: faImgs.addressBook,
  education: faImgs.graduationCap,
  language: faImgs.language,
  link: faImgs.externalLink,
  pawn: faImgs.chessPawn,
  user: faImgs.user,
  work: faImgs.briefcase,
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
