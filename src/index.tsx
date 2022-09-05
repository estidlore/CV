import React from "react";
import { createRoot } from "react-dom/client"; 

import { App } from "./App";

import "@estidlore/bonbon/scss/index.scss";
import "styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container ?? document.body);
root.render(<App />);
