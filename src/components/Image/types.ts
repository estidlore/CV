import type { CSSProperties } from "react";

import type { FaImage } from "assets/imgs/fa";

interface IImageProps {
  className?: string;
  name: FaImage;
  style?: CSSProperties;
}

export type { IImageProps };
