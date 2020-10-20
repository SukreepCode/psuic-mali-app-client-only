import React from "react";
import "./App.less";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory, History } from "history";

import StudentsPage from '../features/students/StudentsPage';
import LoginPage from '../features/login/LoginPage';
import StudentsAddForm from "../features/students/StudentAddForm";

const history = createBrowserHistory();
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
       

      </Switch>
    </Router>
  );
}

export default App;
