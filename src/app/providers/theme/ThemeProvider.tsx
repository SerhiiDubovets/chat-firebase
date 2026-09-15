import { ReactNode } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { baseTheme } from "@shared/styles/theme/baseTheme";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => (
  <StyledThemeProvider theme={baseTheme}>{children}</StyledThemeProvider>
);
