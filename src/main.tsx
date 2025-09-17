import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import App from "@/App";
import { GlobalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter future={{ v7_startTransition: true }}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
      <ToastContainer position="bottom-right" />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
