import { jsPDF } from "jspdf";
import type { FC } from "react";
import React, { useCallback } from "react";

import { getOptions } from "utils/pdf";
import { MainPanel } from "views/MainPanel";
import { SidePanel } from "views/SidePanel";

interface IPDF {
  doc: jsPDF;
  el: HTMLElement;
}

const options = getOptions("CV", 1120, 1500);

const getPdf = (): IPDF | null => {
  const el = document.getElementById(options.name);
  if (el === null) {
    return null;
  }
  const doc = new jsPDF("p", "px", [options.width, options.height]);
  doc.setProperties(options.docProps);

  return { doc, el };
};

const genPdf = ({ doc, el }: IPDF): void => {
  doc.html(el, options.output).then(() => {
    const lastPage = doc.getNumberOfPages();
    doc.deletePage(lastPage);
    doc.output("dataurlnewwindow", options.output);
  }).catch(() => {
    console.log("Error creating the pdf");
  });
};

const CV: FC = (): JSX.Element => {
  const handleSave = useCallback(() => {
    const pdf = getPdf();
    if (pdf !== null) {
      genPdf(pdf);
    }
  }, []);

  return (
    <div>
      <section
        className={"f2 flex light2 pos-rel"}
        id={options.name}
        style={options.style}
      >
        <SidePanel />
        <MainPanel />
        <p className={"ai-center b0 d-f light6 r0 m5 pos-abs"}>
          {"I built this CV with React and jsPDF"}
        </p>
      </section>
      <div className={"flex jc-center"}>
        <button
          className={"bg-primary5 light2 mt3 px3 py2 rnd"}
          onClick={handleSave}
        >
          {"Save"}
        </button>
      </div>
    </div>
  );
};

export { CV };
