import Activity from "../../components/Activity/Activity";
import ActivityCard from "../../components/ActivityCard/ActivityCard";

const mainActivityPage = (): React.ReactElement => {
  return (
    <>
      <ActivityCard />
      <Activity />
    </>
  );
};

export default mainActivityPage;
