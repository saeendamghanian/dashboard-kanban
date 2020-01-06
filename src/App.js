import React from "react";
import "./App.css";
<<<<<<< HEAD
import IconContainer from "./components/IconContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Error404 from "./components/Error404";
import KanbanBoard from "./container components/KanbanBoard";
import NavBar from "./components/Navbar";
import ApplicantDetailPage from "./components/ApplicantDetailPage";
import ListView from "./container components/ListView";
=======
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Error404 from "./components/Error404";
import ApplicantDetailPageContainer from "./components/ApplicantDetailPageContainer";
>>>>>>> e7414e69bba99df1f4fd2a690fdd3203496edacc

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/kanban" component={KanbanBoard} />
          <Route path="/list" component={ListView} />
          <Route path="/applicant/:id" component={ApplicantDetailPage} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
=======
    <div>
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/applicant/:id" component={ApplicantDetailPageContainer} />
        <Route path="*" component={Error404} />
      </Switch>
    </div>
>>>>>>> e7414e69bba99df1f4fd2a690fdd3203496edacc
  );
}

export default App;
