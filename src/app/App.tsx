import React from "react";
import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "../features/login/LoginPage";

import TeachersPage from "../features/admin/teachers/TeachersPage";
import StudentsPage from "../features/admin/students/StudentsPage";
import UsersPage from "../features/admin/UsersPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/teachers">
          <TeachersPage />
        </Route>

        <Route exact path="/students" component={StudentsPage} />

        <Route exact path="/users" component={UsersPage} />
      </Switch>
    </Router>
  );
}

export default App;
