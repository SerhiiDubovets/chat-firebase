import { ReactNode } from "react";

import { RouterProvider } from "./router/RouterProvider";
import { GlobalStylesProvider } from "./styles/GlobalStylesProvider";
import { ThemeProvider } from "./theme/ThemeProvider";
import { ToastProvider } from "./toast/ToastProvider";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <RouterProvider>
      <ThemeProvider>
        <GlobalStylesProvider>
          <ToastProvider>{children}</ToastProvider>
        </GlobalStylesProvider>
      </ThemeProvider>
    </RouterProvider>
  );
};
