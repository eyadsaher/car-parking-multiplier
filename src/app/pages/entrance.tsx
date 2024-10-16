import { entranceStyles } from "./entrance.styles";
import CarPlate from "../components/carPlate";
interface EntranceProps {
  carSize: string;
  sectionToGo: string | null;
  carPlate: number;
}

function Entrance({ carSize, sectionToGo, carPlate }: EntranceProps) {
  if (!sectionToGo) {
    return (
      <div style={entranceStyles.errorContainer}>
        <CarPlate carPlate={carPlate} />
        <h1 style={entranceStyles.errorMessage}>
          Unfortunately, there are no available spaces.
        </h1>
      </div>
    );
  }

  return (
    <div style={entranceStyles.successContainer}>
      <CarPlate carPlate={carPlate} />
      <h1 style={entranceStyles.infoText}>
        Your car size is {carSize.toUpperCase()}. Please proceed to section{" "}
        {sectionToGo.toUpperCase()}.
      </h1>
    </div>
  );
}

export default Entrance;
