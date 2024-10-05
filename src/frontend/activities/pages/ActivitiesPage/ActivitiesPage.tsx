import useActivitiesStore from "../../../store/useActivitiesStore";
import Activity from "../../components/Activity/Activity";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ActivityPage = (): React.ReactElement => {
  const { category } = useParams<{ category: string }>();
  const { activities, loadActivity } = useActivitiesStore();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const apiResponse = await fetch(
          `http://localhost:3000/activities/${category}`
        );

        if (!apiResponse.ok) {
          throw new Error("Error fetching activities");
        }

        const activitiesApiResponse = await apiResponse.json();

        loadActivity(activitiesApiResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActivities();
  }, [category, loadActivity]);

  console.log(activities);

  return (
    <>
      <ActivityCard />
      <Activity />
    </>
  );
};

export default ActivityPage;
