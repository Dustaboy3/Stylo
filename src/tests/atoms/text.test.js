import React from "react";
import { render } from "@testing-library/react";
import CustomText from "../../components/atoms/text";

describe("CustomText component", () => {
  it("should render the correct font size and color", () => {
    const { getByTestId } = render(
      <CustomText fontSize="24px" color="red" type="b" content="Submit" />
    );
    const textElement = getByTestId("custom-text");
    expect(textElement).toHaveStyle(`font-size: 24px`);
    expect(textElement).toHaveStyle(`color: red`);
  });
  it("should render the correct type", () => {
    const { getByTestId } = render(
      <CustomText fontSize="24px" color="red" type="b" content="Submit" />
    );
    const textElement = getByTestId("custom-text");
    expect(textElement.tagName).toBe("B");
  });
  it("should render the correct content", () => {
    const { getByTestId } = render(
      <CustomText fontSize="24px" color="red" type="b" content="Submit" />
    );
    const textElement = getByTestId("custom-text");
    expect(textElement.textContent).toBe("Submit");
  });
});
