import React from "react";
import "./App.css";
import StudentPage from '../features/students/StudentsPage';

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
          <StudentPage />
        </Route>

        <Route path="/students">
          <StudentPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
