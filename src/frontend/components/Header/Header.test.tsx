import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Boored' inside a heading", () => {
      const headerTitleText = /boored/i;

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      const headerTitle = screen.getByRole("heading", {
        name: headerTitleText,
      });

      expect(headerTitle).toBeInTheDocument();
    });
  });
});
