import React, { useCallback } from "react";

import { generatePdf, getOptions } from "utils/pdf";
import { MainPanel } from "views/MainPanel";
import { SidePanel } from "views/SidePanel";

const options = getOptions("CV");

const App = (): JSX.Element => {
  const handleSave = useCallback(() => {
    generatePdf(options);
  }, []);

  return (
    <div className={"ai-center bg-dark1 ff-arial d-f flex-col"}>
      <section
        className={"f1 d-f light2 pos-rel"}
        id={options.name}
        style={options.style}
      >
        <SidePanel />
        <MainPanel />
        <p className={"ai-center b0 d-f light6 r0 m5 pos-abs"}>
          {"I built this CV with React and jsPDF"}
        </p>
      </section>
      <button
        className={"bdr-no bg-primary5 light2 mt3 px3 py2 rnd"}
        onClick={handleSave}
      >
        {"Save"}
      </button>
    </div>
  );
};

export { App };
