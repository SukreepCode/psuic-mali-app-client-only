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
       

      </Switch>
    </Router>
  );
}

export default App;
