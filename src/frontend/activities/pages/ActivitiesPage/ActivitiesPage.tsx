import Activity from "../../components/Activity/Activity";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetchActivity from "../../../hooks/useActivity/useActivity";

const ActivityPage = (): React.ReactElement => {
  const { category } = useParams<{ category: string }>();

  const { activity, fetchActivity: loadActivity } = useFetchActivity();

  useEffect(() => {
    if (category) {
      loadActivity(category);
    }
  }, [category, loadActivity]);

  return (
    <>
      <ActivityCard fetchActivity={loadActivity} category={category} />
      {activity && <Activity activity={activity} />}{" "}
    </>
  );
};

export default ActivityPage;
