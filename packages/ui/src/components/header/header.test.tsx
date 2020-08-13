import React from "react";
import { render } from "@testing-library/react";

import { HeaderProps } from "./header.types";
import Header from "./";

describe("Test Component", () => {
  let props: HeaderProps;

  beforeEach(() => {
    props = {
      text: "Testing",
      imgUrl: "url/"
    };
  });

  const renderComponent = () => render(<Header {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-primary");
  });
});
