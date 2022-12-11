import type { AnchorHTMLAttributes, FC } from "react";
import React from "react";

import { Image } from "components/Image";

type TLinkProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"
>;

const Link: FC<TLinkProps> = ({
  children,
  className,
  href
}: Readonly<TLinkProps>): JSX.Element => (
  <a className={className} href={href} rel={"noreferrer"} target={"_blank"}>
    <Image className={"mr2"} name={"externalLink"} />
    {children}
  </a>
);

export type { TLinkProps };
export { Link };
