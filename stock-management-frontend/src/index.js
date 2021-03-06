import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);
