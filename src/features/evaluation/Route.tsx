import React, { ComponentClass, FunctionComponent } from "react";
import { useHistory, Link, Route, RouteComponentProps } from "react-router-dom";

import EvaluationOverview from "./Overview";
import StudentList from "./StudentList";
import Evaluate from "./Evaluate";

export default () => (
  <>
    <Route exact path="/evaluation" component={EvaluationOverview} />
    <Route exact path="/evaluation/:dm_type/c/:criteria_id/student-list" component={StudentList} />
    <Route
      exact
      path="/evaluation/:dm_type/c/:criteria_id/student-list/e/:id"
      component={Evaluate}
    />
  </>
);
