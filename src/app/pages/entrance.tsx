import { useEffect, useState } from "react";
import { entranceStyles } from "./entrance.styles";
import CarPlate from "../components/carPlate";

interface EntranceProps {
  carSize: string;
  sectionToGo: string;
  carPlate: string;
  error: string | null; // Add error prop
  onExit: () => void;
}

function Entrance({
  carSize,
  sectionToGo,
  carPlate,
  error,
  onExit,
}: EntranceProps) {
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

  if (error) {
    return (
      <div style={entranceStyles.errorContainer}>
        <h1 style={entranceStyles.errorMessage}>
          Car is too far
          <br />
          Please come closer 🚙
        </h1>
        {countdown <= 5 && (
          <h2 style={entranceStyles.countdown}>
            ⚠️ Time remaining: {countdown} seconds ⚠️
          </h2>
        )}
      </div>
    );
  } else if (
    carSize === "ExtraLarge" &&
    sectionToGo === "No Free Parking Places"
  ) {
    return (
      <div style={entranceStyles.errorContainer}>
        <CarPlate carPlate={carPlate} />
        <h1 style={entranceStyles.errorMessage}>
          {carSize} sized car detected 📸
          <br /> Sorry no available spaces for <br /> your size in our parking.
        </h1>
        {countdown <= 5 && (
          <h2 style={entranceStyles.countdown}>
            ⚠️ Time remaining: {countdown} seconds ⚠️
          </h2>
        )}
      </div>
    );
  } else if (sectionToGo === "No Free Parking Places") {
    return (
      <div style={entranceStyles.errorContainer}>
        <CarPlate carPlate={carPlate} />
        <h1 style={entranceStyles.errorMessage}>
          {carSize} sized car detected 📸
          <br /> Sorry no available spaces at the moment please check later ⌛️
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
        {carSize} sized car detected 📸
        <br /> Please proceed to {sectionToGo}
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
