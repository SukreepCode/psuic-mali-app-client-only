import React from "react";
import { render } from "@testing-library/react";

import TeachersAddForm from "./TeachersAddForm";
import { renderWithRedux } from "../../../utils/test";

test("renders Teachers Add Form Page", () => {
  const { getByText } = renderWithRedux(<TeachersAddForm /> );
  const linkElement = getByText(/Add Student Entry/i);
  expect(linkElement).toBeInTheDocument();
});
