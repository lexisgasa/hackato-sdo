import { ActivityData } from "../../types";
import "./Activity.css";

interface ActivityProps {
  activity: ActivityData;
}

const Activity = ({ activity }: ActivityProps): React.ReactElement => {
  return (
    <div className="activity">
      <h3 className="activity__heading">Activitat:</h3>
      <p className="activity__text">{activity.activity}</p>
    </div>
  );
};

export default Activity;
