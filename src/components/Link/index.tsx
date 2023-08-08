import React from "react";

import { Image } from "components/Image";

import type { ILinkProps } from "./types";

const Link = ({ children, className = "", href }: ILinkProps): JSX.Element => (
  <a
    className={`ai-center d-f ${className}`}
    href={href}
    rel={"noreferrer"}
    target={"_blank"}
  >
    <Image className={"mr2"} name={"externalLink"} />
    {children}
  </a>
);

export { Link };
