import type { FC } from "react";
import React from "react";

import { CV } from "views/CV";

const App: FC = (): JSX.Element => (
  <div className={"bg-dark1 ff-arial flex jc-center"}>
    <CV />
  </div>
);

export { App };
