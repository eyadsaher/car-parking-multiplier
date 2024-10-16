import { CSSProperties } from "react";

export const styles: { [key: string]: CSSProperties } = {
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#000000",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  priceBox: {
    backgroundColor: "#ffffff",
    padding: "10px 20px",
    borderRadius: "15px",
    boxShadow: "0 6px 10px rgba(255, 255, 255, 0.2)",
    marginBottom: "30px",
    transition: "transform 0.3s ease-in-out",
  },
  priceInfo: {
    fontSize: "2.5rem",
    color: "#000000",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: 0,
    display: "inline-block",
  },
  rateText: {
    color: "#FF5733",
    fontStyle: "italic",
    fontWeight: "600",
    marginRight: "8px",
  },
  perHour: {
    color: "#3498DB",
    fontWeight: "400",
  },
  title: {
    fontSize: "6rem",
    margin: "20px 0 15px 0",
    color: "#ffffff",
    textShadow: "2px 2px 6px rgba(255, 255, 255, 0.2)",
  },
};
