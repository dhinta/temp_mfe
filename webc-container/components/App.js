import { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount as mountHeader } from "@app-header/headerApp";
import { mount as mountAuth } from "@app-auth/authApp";

const App = () => {
  const headerRef = useRef();
  const bodyRef = useRef();
  const history = useHistory();

  const onNavigate = ({ pathname: nextPathname }) => {
    if (history.location.pathname !== nextPathname) {
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

    headerRouteChange(location);
    authRouteChange(location);

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
