import { entranceStyles } from "./entrance.styles";

interface EntranceProps {
  carSize: string;
  sectionToGo: string | null;
  carPlate: number;
}

function Entrance({ carSize, sectionToGo, carPlate }: EntranceProps) {
  if (!sectionToGo) {
    return (
      <div style={entranceStyles.errorContainer}>
        <h1 style={entranceStyles.errorMessage}>
          Unfortunately, there are no available spaces.
        </h1>
      </div>
    );
  }

  return (
    <div style={entranceStyles.successContainer}>
      <div style={entranceStyles.plateBox}>
        <div style={entranceStyles.euroBand}>
          <div style={entranceStyles.euroStars}>
            <div
              style={{ ...entranceStyles.star, ...entranceStyles.star1 }}
            ></div>
            <div
              style={{ ...entranceStyles.star, ...entranceStyles.star2 }}
            ></div>
            <div
              style={{ ...entranceStyles.star, ...entranceStyles.star3 }}
            ></div>
            <div
              style={{ ...entranceStyles.star, ...entranceStyles.star4 }}
            ></div>
            <div
              style={{ ...entranceStyles.star, ...entranceStyles.star5 }}
            ></div>
            <div
              style={{ ...entranceStyles.star, ...entranceStyles.star6 }}
            ></div>
            <div
              style={{ ...entranceStyles.star, ...entranceStyles.star7 }}
            ></div>
            <div
              style={{ ...entranceStyles.star, ...entranceStyles.star8 }}
            ></div>
          </div>
          <span>A</span>
        </div>
        <p style={entranceStyles.plateText}>{carPlate}</p>
      </div>
      <h1 style={entranceStyles.infoText}>
        Your car size is {carSize.toUpperCase()}. Please proceed to section{" "}
        {sectionToGo.toUpperCase()}.
      </h1>
    </div>
  );
}

export default Entrance;
