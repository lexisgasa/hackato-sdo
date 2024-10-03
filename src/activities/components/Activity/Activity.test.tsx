import { render, screen } from "@testing-library/react";
import Activity from "./Activity";

describe("Given the component Activity", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Activitat:' inside a heading", () => {
      const activityHeadingText = /activitat:/i;

      render(<Activity />);

      const activityHeading = screen.getByRole("heading", {
        name: activityHeadingText,
      });

      expect(activityHeading).toBeInTheDocument();
    });
  });
});
