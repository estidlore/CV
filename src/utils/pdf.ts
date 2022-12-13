import type { IPDFOptions } from "types/pdf";

const getOptions = (
  name: string,
  width: number,
  height: number,
): IPDFOptions => ({
  docProps: {
    author: "estidlore",
    title: name,
  },
  height,
  name,
  output: {
    filename: `${name}.pdf`,
  },
  style: {
    height: `${height}px`,
    width: `${width}px`,
  },
  width,
});

export { getOptions };
