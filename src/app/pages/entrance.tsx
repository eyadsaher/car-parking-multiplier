import { useEffect, useState } from "react";
import { entranceStyles } from "./entrance.styles";
import CarPlate from "../components/carPlate";

interface EntranceProps {
  carSize: string;
  sectionToGo: string | null;
  carPlate: number;
  onExit: () => void;
}

const getCarSizeName = (size: string) => {
  const sizeMap: Record<string, string> = {
    s: "Small",
    m: "Medium",
    l: "Large",
  };
  return sizeMap[size];
};

function Entrance({ carSize, sectionToGo, carPlate, onExit }: EntranceProps) {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setTimeout(() => {
      onExit();
    }, 15000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 1) return prev - 1;
        return prev;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [onExit]);

  if (!sectionToGo) {
    return (
      <div style={entranceStyles.errorContainer}>
        <CarPlate carPlate={carPlate} />
        <h1 style={entranceStyles.errorMessage}>
          No available spaces
          <br />
          Please check again in 10 Mins ⏳
        </h1>
        {countdown <= 5 && (
          <h2 style={entranceStyles.countdown}>
            ⚠️ Time remaining: {countdown} seconds ⚠️
          </h2>
        )}
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
      {countdown <= 5 && (
        <h2 style={entranceStyles.countdown}>
          ⚠️ Time remaining: {countdown} seconds ⚠️
        </h2>
      )}
    </div>
  );
}

export default Entrance;
