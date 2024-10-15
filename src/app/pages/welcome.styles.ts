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
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
    marginBottom: "20px",
  },
  priceInfo: {
    fontSize: "2rem",
    color: "#000000",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: 0,
  },
  title: {
    fontSize: "6rem",
    margin: "20px 0 15px 0",
    color: "#ffffff",
    textShadow: "2px 2px 6px rgba(255, 255, 255, 0.2)",
  },
};
