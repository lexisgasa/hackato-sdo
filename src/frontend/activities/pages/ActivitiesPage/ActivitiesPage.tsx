import Activity from "../../components/Activity/Activity";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetchActivity from "../../../hooks/useActivity/useActivity";
import "./ActivitiesPage.css";

const ActivityPage = (): React.ReactElement => {
  const { category } = useParams<{ category: string }>();

  const { activity, fetchActivity: loadActivity } = useFetchActivity();

  useEffect(() => {
    if (category) {
      loadActivity(category);
    }
  }, [category, loadActivity]);

  return (
    <div className="page-container">
      <ActivityCard fetchActivity={loadActivity} category={category} />
      <div className="border"></div>
      <div className="activity-container">
        {activity ? (
          <Activity activity={activity} />
        ) : (
          <h2>Hi ha masses peticions</h2>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;
