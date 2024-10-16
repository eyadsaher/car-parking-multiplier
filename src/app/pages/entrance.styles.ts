import { CSSProperties } from "react";

export const entranceStyles: { [key: string]: CSSProperties } = {
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#E74C3C",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  errorMessage: {
    fontSize: "5rem",
    color: "#ffffff",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
  },
  successContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#2ECC71",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  infoText: {
    fontSize: "5rem",
    color: "#ffffff",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)",
  },
  countdown: {
    color: "black",
    fontWeight: "bold",
    fontSize: "3rem",
    marginTop: "10px",
  },
};
