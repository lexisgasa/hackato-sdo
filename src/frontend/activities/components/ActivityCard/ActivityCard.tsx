import "./ActivityCard.css";

interface ActivityCardProps {
  fetchActivity: (category: string) => void;
  category: string | undefined;
}

const ActivityCard = ({
  fetchActivity,
  category,
}: ActivityCardProps): React.ReactElement => {
  const handleGenerateActivity = () => {
    if (category) {
      fetchActivity(category);
    }
  };
  return (
    <div className="activityCard">
      <img
        className="activityCard__image"
        src="/oyster.webp"
        alt="imatge d'una ostra de dibuixos feliç"
        width={200}
        height={200}
      />
      <div className="activityCard-container">
        <h2 className="activityCard-container__title">
          Troba alguna cosa a fer
        </h2>
        <button
          className="activityCard-container__button"
          onClick={handleGenerateActivity}
        >
          Generar
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
