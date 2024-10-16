import { useState } from "react";
import Button from "../components/button";
import Entrance from "./entrance";
import { styles } from "./welcome.styles";

interface ParkingInfo {
  parkingArea: string;
  carSize: string;
  plateNumber: string;
  error: string | null;
}

function Welcome() {
  const [showEntrance, setShowEntrance] = useState(false);
  const [parkingInfo, setParkingInfo] = useState<ParkingInfo | null>(null);

  const handleEntrance = async () => {
    const response = await fetch(
      `http://172.16.1.52:7080/api/CarInfo/get-entering-car?carSize=m&sectionToGo=B&carPlate=283822`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 400) {
      setParkingInfo({
        carSize: "",
        parkingArea: "",
        plateNumber: "",
        error: "Car is too far. Please come closer 🚗",
      });
    } else {
      const data: ParkingInfo = await response.json();
      setParkingInfo(data);
    }

    setShowEntrance(true);
  };

  const handleExit = () => {
    setShowEntrance(false);
    setParkingInfo(null);
  };

  if (showEntrance && parkingInfo) {
    return (
      <Entrance
        carSize={parkingInfo.carSize}
        sectionToGo={parkingInfo.parkingArea}
        carPlate={parkingInfo.plateNumber}
        error={parkingInfo.error}
        onExit={handleExit}
      />
    );
  }

  return (
    <div style={styles.welcomeContainer}>
      <div style={styles.priceBox}>
        <p style={styles.priceInfo}>
          <span style={styles.rateText}>Rate: </span>2 EUROS{" "}
          <span style={styles.perHour}>per hour</span>
        </p>
      </div>
      <h1 style={styles.title}>Welcome to Freiburg Central Parking</h1>
      <Button onClick={handleEntrance} label="Open Gate" />
    </div>
  );
}

export default Welcome;
