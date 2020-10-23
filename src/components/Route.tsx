import React, { ComponentClass, FunctionComponent } from "react";
import { useHistory, Link, Route, RouteComponentProps } from "react-router-dom";
import DataAddForm from "./DataList/DataAddForm";

interface RouteProps {
  name: string;
  component:
    | ComponentClass<any, any>
    | FunctionComponent<any>
    | ComponentClass<RouteComponentProps<any, any, any>>;
}

export default ({ name, component }: RouteProps) => (
  <>
    {/* Main Route */}
    <Route exact path={`/${name}`} component={component} />

    {/* Other Routes */}
    {/* <Route path={`/${name}/add`} component={DataAddForm} /> */}
  </>
);
