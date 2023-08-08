import "./styles.scss";

import React from "react";

import { faImgs } from "assets/imgs/fa";

import type { IImageProps } from "./types";

const Image = ({ className = "", name, style }: IImageProps): JSX.Element => (
  <img
    className={`Image ${className}`.trimEnd()}
    src={faImgs[name]}
    style={style}
  />
);

export { Image };
