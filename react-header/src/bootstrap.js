import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";

const mount = (headerRoot) => {
  ReactDOM.render(<App />, headerRoot);
};

const init = () => {
  const devHeaderRoot = document.querySelector("#_header_dev_root");

  if (devHeaderRoot) {
    mount(devHeaderRoot);
  }
};

init();

export { mount };
