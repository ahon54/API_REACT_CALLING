import React from "react";
import { Route, Switch } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/NavBar";
import Error from "./components/Error";
import Api from "./components/Api";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <ThemeSwitcher />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/api" component={Api} />
        <Route component={Error} exact />
      </Switch>
    </div>
  );
}

export default App;
