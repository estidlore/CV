import type { DocumentProperties } from "jspdf";
import type { CSSProperties } from "react";

interface IPDFOutput {
  filename?: string;
}

interface IPDFOptions {
  docProps: DocumentProperties;
  height: number;
  name: string;
  output: IPDFOutput;
  style: Pick<CSSProperties, "height" | "width">;
  width: number;
}

export type { IPDFOptions };
