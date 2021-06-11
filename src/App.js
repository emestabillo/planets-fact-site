import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./shared/Globalstyles";
import MainWrapper from "./components/MainWrapper";
import Navbar from "./components/Navbar/Navbar";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <MainWrapper>
          <Switch>
            <Route path="/mercury">
              <Mercury />
            </Route>
            <Route path="/venus">
              <Venus />
            </Route>
            <Route path="/mars">
              <Mars />
            </Route>
            <Route path="/jupiter">
              <Jupiter />
            </Route>
            <Route path="/saturn">
              <Saturn />
            </Route>
            <Route path="/uranus">
              <Uranus />
            </Route>
            <Route path="/neptune">
              <Neptune />
            </Route>
            <Route path={["/", "/earth"]} component={Earth} />
          </Switch>
        </MainWrapper>
      </Router>
    </>
  );
}

export default App;
