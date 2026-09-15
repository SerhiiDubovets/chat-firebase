import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import ReactDOM from "react-dom/client";

import App from "@app/App";
import { AppProviders } from "@app/providers";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@shared/styles/variables/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <AppProviders>
    <App />
  </AppProviders>,
  // </React.StrictMode>
);
