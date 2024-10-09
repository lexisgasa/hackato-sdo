import { useState, useCallback } from "react";

const useFetchActivity = () => {
  const [activity, setActivity] = useState(null);

  const fetchActivity = useCallback(async (category: string) => {
    try {
      const apiResponse = await fetch(
        `http://localhost:3000/activities/${category}`
      );

      if (!apiResponse.ok) {
        throw new Error("Error fetching activity");
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
