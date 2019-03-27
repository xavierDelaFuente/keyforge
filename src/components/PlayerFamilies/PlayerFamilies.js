import React from "react";
import "./PlayerFamilies.css";

function PlayerFamilies({ familyImages }) {
  const removeFamily = family => {
    if (familyImages.value.length > 0) {
      // console.log(family);
      // console.log(familyImages);
      // console.log(familyImages.value.indexOf(family));
      familyImages.removeById(familyImages.value.indexOf(family));
    }
  };

  return (
    <div className="player-families circle-container">
      {familyImages.value.map((family, i) => (
        <div key={i} className="family-image">
          <div onClick={() => removeFamily(family)}>x</div>
          <img className="family image" src={family} alt="Smiley face" />
        </div>
      ))}
    </div>
  );
}

export default PlayerFamilies;
