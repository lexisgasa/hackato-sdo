import useActivitiesStore from "../../../store/useActivitiesStore";
import Activity from "../../components/Activity/Activity";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ActivityPage = (): React.ReactElement => {
  const { category } = useParams<{ category: string }>();
  const { activity, loadActivity } = useActivitiesStore();

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const apiResponse = await fetch(
          `http://localhost:3000/activities/${category}`
        );

        if (!apiResponse.ok) {
          throw new Error("Error fetching activity");
        }

        const activityApiResponse = await apiResponse.json();

        loadActivity(activityApiResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActivity();
  }, [category, loadActivity]);

  return (
    <>
      <ActivityCard />
      {activity && <Activity activity={activity} />}{" "}
    </>
  );
};

export default ActivityPage;
