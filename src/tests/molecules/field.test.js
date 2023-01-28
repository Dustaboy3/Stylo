import React from "react";
import { render, screen } from "@testing-library/react";
import Field from "../../components/molecules/field";

describe("Field component", () => {
  test("renders without crashing", () => {
    render(<Field />);
  });

  test("renders with custom testId", () => {
    render(<Field testId="_fieldLeft" />);
    const field = screen.getByTestId("custom-field_fieldLeft");
    expect(field).toBeInTheDocument();
  });

  test("renders button with custom testId", () => {
    render(<Field testId="_fieldRight" />);
    const button = screen.getByTestId("custom-buttoncustom-field_fieldRight");
    expect(button).toBeInTheDocument();
  });

  test("renders with className", () => {
    render(<Field class="_custom-class" />);
    const field = screen.getByTestId("custom-field");
    expect(field).toHaveClass("field_custom-class");
  });

  test("renders button with props", () => {
    render(<Field color="blue" size="lg" variant="ghost" content="Button" />);
    const button = screen.getByTestId("custom-buttoncustom-field");
    expect(button).toHaveStyle(`background: var(--chakra-colors-blue-600);`);
    expect(button).toHaveStyle(`font-size: var(--chakra-fontSizes-lg);`);
    expect(button).toHaveStyle(`background: var(--chakra-colors-transparent);`);
    expect(button).toHaveTextContent("Button");
  });
});
