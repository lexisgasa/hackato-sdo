import { useState, useCallback } from "react";

const useFetchActivity = () => {
  const [activity, setActivity] = useState(null);

  const fetchActivity = useCallback(async (category: string) => {
    try {
      const apiResponse = await fetch(
        `${import.meta.env.VITE_API_URL}activities/${category}`
      );

      if (!apiResponse.ok) {
        throw new Error("Hi ha masses peticions a l'API");
      }

      const activityApiResponse = await apiResponse.json();
      setActivity(activityApiResponse);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { activity, fetchActivity };
};

export default useFetchActivity;
