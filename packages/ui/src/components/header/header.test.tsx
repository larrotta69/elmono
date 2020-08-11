import React from "react";
import { render } from "@testing-library/react";

import Header from "./";
import HeaderProps from "./header.types";

describe("Test Component", () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<Header {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-secondary");
  });
});
