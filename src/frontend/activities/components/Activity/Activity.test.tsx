import { render, screen } from "@testing-library/react";
import Activity from "./Activity";
import { ActivityData } from "../../types";

describe("Given the component Activity", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Activitat:' inside a heading", () => {
      const activityHeadingText = /activitat:/i;
      const activityMock: ActivityData = {
        activity: "",
      };

      render(<Activity activity={activityMock} />);

      const activityHeading = screen.getByRole("heading", {
        name: activityHeadingText,
      });

      expect(activityHeading).toBeInTheDocument();
    });
  });
});
