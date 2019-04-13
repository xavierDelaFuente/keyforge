import React from "react";
import "./PlayerFamilies.css";

function PlayerFamilies({ familyImages, setfamilyImages }) {
  const removeFamily = family => {
    if (familyImages.length > 0) {
      setfamilyImages(
        familyImages.filter(currentFamily => currentFamily !== family)
      );
    }
  };

  return (
    <div className="player-families circle-container">
      {familyImages.map((family, i) => (
        <div key={i} className="family-image">
          <div className="remove-family" onClick={() => removeFamily(family)}>
            x
          </div>
          <img className="family image" src={family} alt="Smiley face" />
        </div>
      ))}
    </div>
  );
}

export default PlayerFamilies;
