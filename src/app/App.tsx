import React from "react";
import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "../features/login/LoginPage";

import TeachersPage from "../features/admin/teachers/TeachersPage";
import TeachersAddForm from "../features/admin/teachers/TeachersAddForm";
import TeachersEditForm from "../features/admin/teachers/TeachersEditForm";

import UsersPage from "../features/admin/UsersPage";

import DataRoute from "../components/DataList/DataRoute";
import DataList from "../components/DataList/DataList";

import StudentsListPage from "../features/admin/students/StudentsListPage";
import StudentsRoute from "../features/admin/students/StudentsRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <StudentsRoute />

        <Route exact path="/teachers">
          <TeachersPage />
        </Route>

        <Route exact path="/teachers/add">
          <TeachersAddForm />
        </Route>

        <Route exact path="/teachers/edit/:id">
          <TeachersEditForm />
        </Route>
        </Switch>

        <Switch>
        <Route exact path="/users">
          <UsersPage />
        </Route>

      </Switch>

      <Switch>
        <DataList.Route name="new-students" component={StudentsListPage} />
      </Switch>

    </Router>
  );
}

export default App;
