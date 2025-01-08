import React from "react";
import "./Bricks.css"; // Import CSS for styling

// Import brick images
import brick1 from "./../assets/brick1.jpeg";
import brick2 from "./../assets/brick2.jpeg";
import brick3 from "./../assets/brick3.jpeg";

const Bricks = () => {
  const bricksData = [
    {
      name: "Standard Brick",
      measurement: "190 x 90 x 90 mm",
      description: "A commonly used brick with standard dimensions for most construction purposes.",
      image: brick1,
    },
    {
      name: "Engineering Brick",
      measurement: "215 x 102.5 x 65 mm",
      description: "Strong and durable brick, often used for structural purposes and water resistance.",
      image: brick2,
    },
    {
      name: "Fire Brick",
      measurement: "230 x 114 x 64 mm",
      description: "High heat-resistant brick, ideal for lining fireplaces, ovens, and furnaces.",
      image: brick3,
    },
  ];

  return (
    <div className="bricks-section">
      <h2 className="section-title">Our Bricks</h2>
      <div className="bricks-container">
        {bricksData.map((brick, index) => (
          <div key={index} className="brick-card">
            <img src={brick.image} alt={brick.name} className="brick-image" />
            <div className="brick-info">
              <h3>{brick.name}</h3>
              <p>
                <strong>Measurement:</strong> {brick.measurement}
              </p>
              <p>{brick.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bricks;
