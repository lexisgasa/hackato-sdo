import { render, screen } from "@testing-library/react";
import ActivityCard from "./ActivityCard";

describe("Given the component ActivityCard", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative name 'imatge d'una ostra de dibuixos feliç'", () => {
      const activityCardImageAlternativeText =
        "imatge d'una ostra de dibuixos feliç";

      render(<ActivityCard />);

      const activityCardImage = screen.getByRole("img", {
        name: activityCardImageAlternativeText,
      });

      expect(activityCardImage).toBeInTheDocument();
    });
  });
});
