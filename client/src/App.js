import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
