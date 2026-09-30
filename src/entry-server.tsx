import React from "react";
import { renderToString } from "react-dom/server";

import App from "./App";

/** Used by scripts/prerender.mjs to turn the app into static HTML at build time. */
export const render = () =>
    renderToString(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
