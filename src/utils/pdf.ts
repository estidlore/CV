import jsPDF from "jspdf";

import type { IPDFOptions } from "types/pdf";

const generatePdf = (options: IPDFOptions): void => {
  // Create doc
  const el = document.getElementById(options.name);
  if (el === null) {
    return;
  }
  const doc = new jsPDF("p", "px", [options.width, options.height]);
  doc.setProperties(options.docProps);
  // Generate doc
  doc.html(el, options.output).then(() => {
    const lastPage = doc.getNumberOfPages();
    doc.deletePage(lastPage);
    doc.output("dataurlnewwindow", options.output);
  }).catch(() => {
    console.log("Error generating the pdf");
  });
};

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

export { generatePdf, getOptions };
