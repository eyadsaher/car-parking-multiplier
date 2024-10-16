import { useState } from "react";
import Button from "../components/button";
import Entrance from "./entrance";
import { styles } from "./welcome.styles";

function Welcome() {
  const [showEntrance, setShowEntrance] = useState(false);
  const carSize = "m";
  const sectionToGo = "B";
  const carPlate = 283822;

  const handlePaymentClick = () => {
    setShowEntrance(true);
  };

  const handleExit = () => {
    setShowEntrance(false);
  };

  if (showEntrance) {
    return (
      <Entrance
        carSize={carSize}
        sectionToGo={sectionToGo}
        carPlate={carPlate}
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
      <Button onClick={handlePaymentClick} label="Open Gate" />
    </div>
  );
}

export default Welcome;
