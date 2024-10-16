import Button from "../components/button";
import { styles } from "./welcome.styles";

function Welcome() {
  const handlePaymentClick = () => {
    const carSize = "s";
    const sectionToGo = "s";

    let message = "no place sorry pookie";

    if (sectionToGo === "s" || sectionToGo === "m" || sectionToGo === "l") {
      message = `Hey, your car size is ${carSize.toUpperCase()} and you should enter section ${sectionToGo.toUpperCase()} please.`;
    }

    alert(message);
  };

  return (
    <div style={styles.welcomeContainer}>
      <div style={styles.priceBox}>
        <p style={styles.priceInfo}>
          <span style={styles.rateText}>Rate: </span>2 EUROS{" "}
          <span style={styles.perHour}>per hour</span>
        </p>
      </div>
      <h1 style={styles.title}>Welcome to Vienna Central Parking</h1>
      <Button onClick={handlePaymentClick} label="Open Gate" />
    </div>
  );
}

export default Welcome;
