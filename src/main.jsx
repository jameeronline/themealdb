import React from "react";
import ReactDOM from "react-dom/client";

//Add Swiper
import { register } from "swiper/element/bundle";

//React Query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClientInstance = new QueryClient();

//Dev tools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//register swiper element
register();

//CSS
import "./index.css";

//App
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClientInstance}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
