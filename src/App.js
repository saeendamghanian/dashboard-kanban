import React from "react";
import "./App.css";
import IconContainer from "./components/IconContainer";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Error404 from "./components/Error404";
import ApplicantDetailPageContainer from "./components/ApplicantDetailPageContainer";

function App() {
  // The fake data instead of the data which should get from DB.
  let callStatus = ["successful", "unsuccessful", "not yet"];

  return (
    <div>
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/applicant/:id" component={ApplicantDetailPageContainer} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
