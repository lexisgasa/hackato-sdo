import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";

describe("Given the component NavMenu", () => {
  describe("When it is rendered", () => {
    test("It should show a button with the accessible name 'Educació'", () => {
      const navMenuButtonText = /educació/i;

      render(<NavMenu />);

      const navMenuButton = screen.getByRole("button", {
        name: navMenuButtonText,
      });

      expect(navMenuButton).toBeInTheDocument();
    });
  });
});
