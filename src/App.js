import React from "react";
import "./App.css";
import IconContainer from "./components/IconContainer";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Error404 from "./components/Error404";
import ApplicantName from "./components/ApplicantLabel";

function App() {
  // The fake data instead of the data which should get from DB.
  let callStatus = ["successful", "unsuccessful", "not yet"];
  let applicantInfo = { applicantId: "17", applicantName: "Saeen" };

  return (
    <div>
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route
          path="/applicant-name"
          render={props => (
            <ApplicantName {...props} applicantInfo={applicantInfo} />
          )}
        />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
