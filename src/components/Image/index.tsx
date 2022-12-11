import "./styles.scss";

import type { FC } from "react";
import React from "react";

import { faImgs } from "assets/imgs/fa";

import type { IImageProps } from "./types";

const Image: FC<IImageProps> = ({
  className = "",
  name,
  style,
}: IImageProps): JSX.Element => (
  <img
    className={`Image ${className}`.trimEnd()}
    src={faImgs[name]}
    style={style}
  />
);

export { Image };
