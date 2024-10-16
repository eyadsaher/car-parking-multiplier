import React, { useEffect, useState } from "react";

interface CarInfoResponse {
  parkingArea: string;
  carSize: string;
  plateNumber: string;
  error: string | null;
}

const CarInfo = () => {
  const [carData, setCarData] = useState<CarInfoResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarInfo = async () => {
      try {
        const response = await fetch(
          "http://172.16.1.52:7080/api/CarInfo/get-entering-car"
        );

        // Check if the response is successful
        if (!response.ok) {
          const errorMessage = await response.text(); // Get the error message from the response
          throw new Error(
            `HTTP error! status: ${response.status} - ${errorMessage}`
          );
        }

        const data: CarInfoResponse = await response.json();

        if (data.error) {
          setError(data.error); // Set the error from the API response
        } else {
          setCarData(data); // Set car data if no error
        }
      } catch (err) {
        // Log the error for better debugging
        console.error("Fetching error:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch car info"
        );
      }
    };

    fetchCarInfo();
  }, []);

  return (
    <div>
      {error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : carData ? (
        <div>
          <p>
            <strong>Parking Area:</strong> {carData.parkingArea}
          </p>
          <p>
            <strong>Car Size:</strong> {carData.carSize}
          </p>
          <p>
            <strong>Plate Number:</strong> {carData.plateNumber}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarInfo;
