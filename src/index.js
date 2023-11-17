import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import App from "./App";
import "./index.css";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
