import { useState } from "react";
import Button from "../components/button";
import { ExitStyles } from "./exit.styles";

function Exit() {
  const [message, setMessage] = useState<string | null>(null);
  const [showGoodbye, setShowGoodbye] = useState(false);

  const handleOpenGate = async () => {
    const response = await fetch(
      "http://172.16.1.52:7080/api/CarInfo/get-existing-car",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      if (data.message === "Car has left the parking") {
        setShowGoodbye(true);
      } else {
        setMessage(data.message); // Handle any other message from the API
      }
    } else {
      setMessage("An error occurred while checking the car status.");
    }
  };

  if (showGoodbye) {
    return (
      <div style={ExitStyles.goodbyeContainer}>
        <h1 style={ExitStyles.goodbyeMessage}>Goodbye! Have a great day! 🌟</h1>
      </div>
    );
  }

  return (
    <div style={ExitStyles.exitContainer}>
      <h1 style={ExitStyles.title}>Exit from Here ❗️</h1>
      {message && <p style={ExitStyles.message}>{message}</p>}
      <Button onClick={handleOpenGate} label="Open Gate" />
    </div>
  );
}

export default Exit;
