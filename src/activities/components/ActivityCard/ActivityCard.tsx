import "./ActivityCard.test.css";

const ActivityCard = (): React.ReactElement => {
  return (
    <div className="activityCard-mainContainer">
      <img
        src="/oyster.webp"
        alt="imatge d'una ostra de dibuixos feliç"
        width={200}
        height={200}
      />
      <div className="activityCard-container">
        <h2 className="activityCard-container__title">
          Troba alguna cosa a fer
        </h2>
        <button className="activityCard-container__button">Generar</button>
      </div>
    </div>
  );
};

export default ActivityCard;
