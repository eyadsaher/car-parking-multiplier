import { entranceStyles } from "./entrance.styles";
import CarPlate from "../components/carPlate";

interface EntranceProps {
  carSize: string;
  sectionToGo: string | null;
  carPlate: number;
}

const getCarSizeName = (size: string) => {
  const sizeMap: Record<string, string> = {
    s: "Small",
    m: "Medium",
    l: "Large",
  };
  return sizeMap[size];
};

function Entrance({ carSize, sectionToGo, carPlate }: EntranceProps) {
  if (!sectionToGo) {
    return (
      <div style={entranceStyles.errorContainer}>
        <CarPlate carPlate={carPlate} />
        <h1 style={entranceStyles.errorMessage}>
          No available spaces
          <br />
          Please check again in 10 Mins ⏳
        </h1>
      </div>
    );
  }

  return (
    <div style={entranceStyles.successContainer}>
      <CarPlate carPlate={carPlate} />
      <h1 style={entranceStyles.infoText}>
        {getCarSizeName(carSize)} sized car detected 📸
        <br /> Please proceed to section {sectionToGo.toUpperCase()}
      </h1>
    </div>
  );
}

export default Entrance;
