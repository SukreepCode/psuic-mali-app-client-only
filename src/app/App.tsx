import React from "react";
import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "../features/login/LoginPage";

import TeachersPage from "../features/admin/teachers/TeachersPage";
import StudentsPage from "../features/admin/students/StudentsPage";
import CriteriaPage from "../features/admin/criteria/CriteriaPage";
import UsersPage from "../features/admin/UsersPage";

import EvaluationOverview from "../features/evaluation/Overview";
import StudentList from "../features/evaluation/StudentList";
import Evaluate from "../features/evaluation/Evaluate";


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

        <Route exact path="/evaluation" component={EvaluationOverview} />
        <Route exact path="/evaluation/student-list" component={StudentList} />
        <Route exact path="/evaluation/student-list/evaluate/:id" component={Evaluate} />
        
      </Switch>
    </Router>
  );
}

export default App;
