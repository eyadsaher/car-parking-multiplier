import { CSSProperties } from "react";

export const styles: { [key: string]: CSSProperties } = {
  button: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "50px",
    padding: "15px 40px",
    fontSize: "1.5rem",
    cursor: "pointer",
    transition:
      "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    outline: "none",
    marginTop: "30px",
  },
};
