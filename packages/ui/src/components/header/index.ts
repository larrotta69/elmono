import React from "react";

import HeaderProps from "./header.types";

import "./TestComponent.scss";

const TestComponent: React.FC<HeaderProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default TestComponent;
