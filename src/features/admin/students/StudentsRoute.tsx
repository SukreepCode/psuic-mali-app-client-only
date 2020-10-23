import React from "react";

import { Route } from "react-router-dom";

import StudentsPage from "./StudentsPage";
import StudentsAddForm from "./StudentsAddForm";
import StudentsEditForm from "./StudentsEditForm";

export default () => {
  return (
    <>
      <Route exact path="/students" component={StudentsPage} />
      <Route path="/students/add" component={StudentsAddForm} /> 
      <Route path="/students/edit" component={StudentsEditForm} /> 
    </>
  );
};
