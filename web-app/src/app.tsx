import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Router from "src/pages/routes";

import { ThemeProvider } from "./hooks/useTheme";
import Providers from "./lib/components/common/Providers";

const App = () => {
  return (
    <ThemeProvider>
      <Providers>
        <RouterProvider router={createBrowserRouter(Router)} />
      </Providers>
    </ThemeProvider>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) createRoot(rootEl).render(<App />);
