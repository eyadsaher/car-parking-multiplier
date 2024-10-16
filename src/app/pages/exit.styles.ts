import { CSSProperties } from "react";

export const ExitStyles: { [key: string]: CSSProperties } = {
  exitContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#000000",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  goodbyeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#000000",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "6rem",
    margin: "20px 0 15px 0",
    color: "#ffffff",
    textShadow: "2px 2px 6px rgba(255, 255, 255, 0.2)",
  },
  message: {
    fontSize: "2rem",
    color: "#FF5733",
    margin: "10px 0",
  },
  goodbyeMessage: {
    fontSize: "4rem",
    color: "#ffffff",
  },
};
