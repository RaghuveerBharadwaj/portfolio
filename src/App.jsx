import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import { Contact, Home } from "./pages";
import "./App.css";
import { getDevice } from "./components/device";

const App = () => {
  ReactGA.initialize("G-SQGTR7YZT7");
  const history = createBrowserHistory();
  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  const [device, setDevice] = useState("");

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    setDevice(getDevice());
  }, []);

  return (
    <Router basename="/portfolio">
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} device={device} />}
        />
        <Route
          exact
          path="/contact"
          component={(props) => <Contact {...props} device={device} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
