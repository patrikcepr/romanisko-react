import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const app = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Production HTML is prerendered at build time (scripts/prerender.mjs) – attach to it instead of re-rendering.
if (container.hasChildNodes()) ReactDOM.hydrateRoot(container, app);
else ReactDOM.createRoot(container).render(app);
