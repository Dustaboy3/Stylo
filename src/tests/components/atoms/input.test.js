import React from "react";
import { render } from "@testing-library/react";
import CustomInput from "../../../components/atoms/input";

describe("CustomInput", () => {
  it("renders an input with custom props", () => {
    const placeholder = "Enter a value";
    const size = "md";
    const variant = "outline";
    const focusBorderColor = "blue";
    const color = "green";
    const { getByPlaceholderText, getByTestId } = render(
      <CustomInput
        placeholder={placeholder}
        size={size}
        variant={variant}
        focusBorderColor={focusBorderColor}
        color={color}
      />
    );

    const input = getByPlaceholderText(placeholder);
    expect(input).toHaveStyle(`font-size: var(--chakra-fontSizes-md);`);
    expect(input).toHaveStyle(`border-color: inherit;`);
    expect(input).toHaveStyle(`background: inherit;`);
    expect(input).toHaveStyle(`color: green;`);
    expect(input).toHaveAttribute("placeholder", placeholder);
    expect(getByTestId("custom-input")).toBeInTheDocument();
  });
});
