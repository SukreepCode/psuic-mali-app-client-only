import React from "react";
import "./App.less";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import StudentsPage from '../features/admin/students/StudentsPage';
import LoginPage from '../features/login/LoginPage';
import StudentsAddForm from "../features/admin/students/StudentsAddForm";
import StudentsEditForm from "../features/admin/students/StudentsEditForm";

import TeachersPage from '../features/admin/teachers/TeachersPage';
import TeachersAddForm from "../features/admin/teachers/TeachersAddForm";
import TeachersEditForm from "../features/admin/teachers/TeachersEditForm";

function App() {
  return (
     <Router>

      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/students">
          <StudentsPage />
        </Route>

        <Route exact path="/students/add">
          <StudentsAddForm />
        </Route>

        <Route exact path="/students/edit/:id">
          <StudentsEditForm />
        </Route>

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
    </Router>
  );
}

export default App;
