import html2canvas, { Options } from "html2canvas";
import { jsPDF } from "jspdf";
import { FC, useCallback } from "react";
import React from "react";

import type { IMainPanelProps } from "./MainPanel";
import { MainPanel } from "./MainPanel";
import type { ISidePanelProps } from "./SidePanel";
import { SidePanel } from "./SidePanel";

interface ICVProps extends IMainPanelProps, ISidePanelProps {
  height?: number;
  width?: number;
}

interface IPDF {
  cv: HTMLElement;
  doc: jsPDF;
  height: number;
  options: {
    filename: string;
  };
  width: number;
}

const pdfOptions = {
  html2canvas: {
    scale: 1,
  },
};

const getPdf = (id: string, width: number, height: number): IPDF | null => {
  const cv = document.getElementById(id);
  if (cv === null) {
    return null;
  }
  const doc = new jsPDF('p', "px", [width, height]);
  doc.setProperties({ title: id });
  const options = {
    filename: id + ".pdf",
  };

  return { cv, doc, height, options, width };
};

const genPdf = ({ cv, doc, options }: IPDF): void => {
  doc.html(cv, pdfOptions).then(() => {
    // Delete last blank page
    doc.deletePage(doc.getNumberOfPages());
    doc.output("dataurlnewwindow", options);
  });
};

const CV: FC<ICVProps> = ({
  basicInfo,
  complementaryEducation,
  contact,
  education,
  experience,
  height = 1400, //1620,
  hobbies,
  languages,
  profile,
  skills,
  width = 1080,
}: Readonly<ICVProps>): JSX.Element => {
  const handleSave = useCallback(() => {
    const id = "CV";
    const pdf = getPdf(id, width, height);
    if (pdf !== null) {
      genPdf(pdf);
    }
  }, [height, width]);

  return (
    <div>
      <section
        className={"f2 flex light2 pos-rel"}
        id={"CV"}
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        <SidePanel
          basicInfo={basicInfo}
          contact={contact}
          hobbies={hobbies}
          languages={languages}
          profile={profile}
          skills={skills}
        />
        <MainPanel
          complementaryEducation={complementaryEducation}
          education={education}
          experience={experience}
        />
        <p className={"b0 light8 l0 m3 pos-abs"}>
          {"I built this CV with React and jsPDF"}
        </p>
      </section>
      <div className={"flex jc-center"}>
        <button
          onClick={(handleSave)}
          className={"bg-primary5 light2 mt3 px3 py2 rnd"}
        >
          {"Save"}
        </button>
      </div>
    </div>
  );
};

export type { ICVProps };
export { CV };