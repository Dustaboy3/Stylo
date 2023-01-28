import React from "react";
import { render } from "@testing-library/react";
import Footer from "../../../components/molecules/footer";

describe("Footer component", () => {
  it("should render footer and footer title", () => {
    const { getByTestId } = render(<Footer />);
    const header = getByTestId("footer");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Stylo @2023");
  });
});
