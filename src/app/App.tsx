import React from "react";
import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "../features/login/LoginPage";

import TeachersPage from "../features/admin/teachers/TeachersPage";
import StudentsPage from "../features/admin/students/StudentsPage";
import CriteriaPage from "../features/admin/criteria/CriteriaPage";
import UsersPage from "../features/admin/UsersPage";

import EvaluationRoute from "../features/evaluation/Route";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage successRoute="/evaluation" />
        </Route>

        <Route exact path="/teachers" component={TeachersPage} />
        <Route exact path="/students" component={StudentsPage} />
        <Route exact path="/criteria" component={CriteriaPage} />
        <Route exact path="/users" component={UsersPage} />

        <EvaluationRoute />
        
      </Switch>
    </Router>
  );
}

export default App;
