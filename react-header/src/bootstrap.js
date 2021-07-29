import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import { memoryHistory, browserHistory } from "../libs/history";

const mountDev = (headerRoot, history) => {
  ReactDOM.render(<App history={history} />, headerRoot);
};

const mountContainer = (headerRoot, history, { onNavigate }) => {
  memoryHistory.listen(onNavigate);
  ReactDOM.render(<App history={history} />, headerRoot);
};

const mount = (headerRoot, config) => {
  console.log("header");
  const history = config ? memoryHistory : browserHistory;
  if (config) {
    mountContainer(headerRoot, history, config);
  } else {
    mountDev(headerRoot, history);
  }

  return {
    onRouteChange({ pathname: newPathname }) {
      const {
        location: { pathname },
      } = history;

      if (pathname !== newPathname) {
        history.push(newPathname);
      }
    },
  };
};

const init = () => {
  const devHeaderRoot = document.querySelector("#_header_dev_root");

  if (devHeaderRoot) {
    mount(devHeaderRoot);
  }
};

init();

export { mount };
