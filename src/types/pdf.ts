import type { DocumentProperties } from "jspdf";
import type { CSSProperties } from "react";

interface IPDFOutput {
  filename?: string;
}

interface IPDFOptions {
  docProps: DocumentProperties;
  name: string;
  output: IPDFOutput;
  style: Pick<CSSProperties, "height" | "width">;
}

export type { IPDFOptions };
