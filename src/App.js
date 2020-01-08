import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Error404 from "./components/Error404";
import ApplicantDetailPageContainer from "./containers/ApplicantDetailPageContainer";
import KanbanPage from "./components/KanbanPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/kanban" component={KanbanPage} />
          <Route
            path="/applicant/:id"
            component={ApplicantDetailPageContainer}
          />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
