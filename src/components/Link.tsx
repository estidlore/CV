import type { AnchorHTMLAttributes, FC } from "react";
import React from "react";

import { Img } from "./Img";

type TLinkProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"
>;

const Link: FC<TLinkProps> = ({
  children,
  className,
  href
}: Readonly<TLinkProps>): JSX.Element => (
  <a className={className} href={href} rel={"noreferrer"} target={"_blank"}>
    <Img className={"mr2"} img={"link"} />
    {children}
  </a>
);

export type { TLinkProps };
export { Link };
