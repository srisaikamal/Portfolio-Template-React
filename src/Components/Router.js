import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

const ReactRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Projects" component={Projects} />
      </Switch>
    </Router>
  );
};

export default ReactRouter;
