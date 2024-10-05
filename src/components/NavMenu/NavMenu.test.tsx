import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the component NavMenu", () => {
  describe("When it is rendered", () => {
    test("It should show the text 'Educació'", () => {
      const navMenuLinkText = /educació/i;

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>
      );

      const navMenuLink = screen.getByRole("link", {
        name: navMenuLinkText,
      });

      expect(navMenuLink).toBeInTheDocument();
    });
  });
});
