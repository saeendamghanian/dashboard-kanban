import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Error404 from "./components/Error404";
import ApplicantDetailPageContainer from "./components/ApplicantDetailPageContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/applicant/:id" component={ApplicantDetailPageContainer} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
