import React from "react";
import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "../features/login/LoginPage";

import TeachersPage from "../features/admin/teachers/TeachersPage";
import StudentsPage from "../features/admin/students/StudentsPage";
import UsersPage from "../features/admin/UsersPage";
import EvaluationOverview from "../features/evaluation/Overview";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/teachers" component={TeachersPage} />
        <Route exact path="/students" component={StudentsPage} />
        <Route exact path="/users" component={UsersPage} />

        <Route exact path="/evaluation" component={EvaluationOverview} />
        
      </Switch>
    </Router>
  );
}

export default App;
