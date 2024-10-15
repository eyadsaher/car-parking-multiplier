import PaymentButton from "../components/PaymentButton";
import { styles } from "./welcome.styles";

function Welcome() {
  const handlePaymentClick = () => {
    alert("Payment processing...");
  };

  return (
    <div style={styles.welcomeContainer}>
      <div style={styles.priceBox}>
        <p style={styles.priceInfo}>1 hour = 2 euros</p>
      </div>
      <h1 style={styles.title}>Welcome to Vienna Central Parking</h1>
      <PaymentButton onClick={handlePaymentClick} label="Pay and Open" />
    </div>
  );
}

export default Welcome;
