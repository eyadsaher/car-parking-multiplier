import React from "react";
import { styles } from "./button.styles";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      style={{
        ...styles.button,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
