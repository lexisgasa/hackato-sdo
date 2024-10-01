import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Boored' inside a heading", () => {
      const headerTitleText = /boored/i;

      render(<Header />);

      const headerTitle = screen.getByRole("heading", {
        name: headerTitleText,
      });

      expect(headerTitle).toBeInTheDocument();
    });
  });
});
