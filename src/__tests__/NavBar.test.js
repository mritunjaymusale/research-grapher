import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import NavBar from "../NavBar";

describe("Navbar", () => {
  beforeAll(() => {
    render(<NavBar />);
  });
  it("should render", async () => {
    await waitFor(() => {
      screen.getByText("Research Grapher");
    });
    expect(document.querySelector("a.center")).toBeInTheDocument();
    expect(document.querySelector("nav.black")).toBeInTheDocument();
  });
});
