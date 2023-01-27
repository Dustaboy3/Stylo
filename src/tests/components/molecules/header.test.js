import React from "react";
import { render } from "@testing-library/react";
import Header from "../../../components/molecules/header";

describe("Header component", () => {
  it("should render header and header title", () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId("header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Stylo");
  });
});
