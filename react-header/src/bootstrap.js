import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import { getHistory } from "../libs/history";

const mountDev = (headerRoot, history) => {
  ReactDOM.render(<App history={history} />, headerRoot);
};

const mountContainer = (headerRoot, history, { onNavigate }) => {
  history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, headerRoot);
};

const mount = (headerRoot, config) => {
  const history = getHistory(config);
  if (config) {
    mountContainer(headerRoot, history, config);
  } else {
    mountDev(headerRoot, history);
  }

  return {
    onRouteChange({ pathname: newPathname }) {
      // const history = getHistory(config);
      let {
        location: { pathname },
      } = history;
      pathname = pathname.replace(/^\/+|\/+$/g, "").trim();
      newPathname = newPathname.replace(/^\/+|\/+$/g, "").trim();

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
