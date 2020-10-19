import React from "react";
import "./App.less";
import StudentPage from '../features/students/StudentsPage';
import LoginPage from '../features/login/LoginPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
     <Router>

      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route path="/students">
          <StudentPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
