import React, { useState } from "react";
import { styles } from "./paymentButton.styles";

interface PaymentButtonProps {
  onClick: () => void;
  label: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ onClick, label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      style={{
        ...styles.button,
        ...(hovered ? styles.buttonHover : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
};

export default PaymentButton;
