import { useRef, useEffect } from "react";

import { mount as mountHeader } from "@app-header/headerApp";
import { mount as mountAuth } from "@app-auth/authApp";

const App = ({ history }) => {
  console.log('shell');
  const headerRef = useRef();
  const bodyRef = useRef();

  const onNavigate = ({ pathname: nextPathname }) => {
    let currentPath = history.location.pathname
      .replace(/^\/+|\/+$/g, "")
      .trim();
    nextPathname = nextPathname.replace(/^\/+|\/+$/g, "").trim();
    if (currentPath !== nextPathname) {
      history.push(nextPathname);
    }
  };

  useEffect(() => {
    const { onRouteChange: headerRouteChange } = mountHeader(
      headerRef.current,
      { onNavigate }
    );
    const { onRouteChange: authRouteChange } = mountAuth(bodyRef.current, {
      onNavigate,
    });

    headerRouteChange(history.location);
    authRouteChange(history.location);

    const onHistoryChange = history.listen((location) => {
      headerRouteChange(location);
      authRouteChange(location);
    });

    return onHistoryChange;
  }, []);

  return (
    <>
      <header ref={headerRef}></header>
      <div ref={bodyRef}></div>
    </>
  );
};

export default App;
