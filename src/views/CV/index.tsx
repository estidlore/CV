import type { FC } from "react";
import React, { useCallback } from "react";

import { generatePdf, getOptions } from "utils/pdf";
import { MainPanel } from "views/MainPanel";
import { SidePanel } from "views/SidePanel";

const options = getOptions("CV", 1120, 1500);

const CV: FC = (): JSX.Element => {
  const handleSave = useCallback(() => {
    generatePdf(options);
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
