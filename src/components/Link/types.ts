import type { AnchorHTMLAttributes } from "react";

type ILinkProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className" | "href"
>;

export type { ILinkProps };
