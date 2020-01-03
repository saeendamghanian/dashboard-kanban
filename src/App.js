import React from "react";
import "./App.css";
import IconContainer from "./components/IconContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Error404 from "./components/Error404";
import Container from "./components/Container";
import NavBar from "./components/Navbar";

function App() {
  // The fake data instead of the data which should get from DB.
  let callStatus = ["successful", "unsuccessful", "not yet"];

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/kanban" component={Container} />
          <Route component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
