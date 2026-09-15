import { ReactNode } from "react";

import { GlobalStyle } from "@shared/styles/global";
import "overlayscrollbars/overlayscrollbars.css";

export const GlobalStylesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
