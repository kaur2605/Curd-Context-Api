import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/Edit";
import AddUser from "./components/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./contextapi/GlobalState";


function App() {
  return (
    <div style={{ width: "600px", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/add" component={AddUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
