import { carPlateStyles } from "./carPlate.styles";

interface carPlateProps {
  carPlate: string;
}

function CarPlate({ carPlate }: carPlateProps) {
  const starStyles = Array.from(
    { length: 8 },
    (_, index) => carPlateStyles[`star${index + 1}`]
  );

  return (
    <div style={carPlateStyles.plateBox}>
      <div style={carPlateStyles.euroBand}>
        <div style={carPlateStyles.euroStars}>
          {starStyles.map((style, index) => (
            <div key={index} style={{ ...carPlateStyles.star, ...style }}></div>
          ))}
        </div>
        <span>A</span>
      </div>
      <p style={carPlateStyles.plateText}>{carPlate}</p>
    </div>
  );
}

export default CarPlate;
