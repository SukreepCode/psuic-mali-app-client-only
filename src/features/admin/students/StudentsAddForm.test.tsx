import React from "react";
import { render } from "@testing-library/react";

import StudentsAddForm from "./StudentsAddForm";
import { renderWithRedux } from "../../../utils/test";

test("renders Students Add Form Page", () => {
  const { getByText } = renderWithRedux(<StudentsAddForm /> );
  const linkElement = getByText(/Add Student Entry/i);
  expect(linkElement).toBeInTheDocument();
});
