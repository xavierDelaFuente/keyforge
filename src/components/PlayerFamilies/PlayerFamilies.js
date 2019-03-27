import React from "react";
import "./PlayerFamilies.css";

import osoLogo from "../../data/img/oso.jpg";

function PlayerFamilies({ familyImages }) {
  const removeFamily = family => {
    if (familyImages.value.length > 0) {
      // console.log(family);
      // console.log(familyImages);
      // console.log(familyImages.value.indexOf(family));
      familyImages.removeById(familyImages.value.indexOf(family));
    }
  };

  const renderPlayerFamilies = (families = [osoLogo]) =>
    families.value.map((family, i) => (
      <div key={i} className="family-image">
        <img className="family image" src={family} alt="Smiley face" />
        <div onClick={() => removeFamily(family)}>x</div>
      </div>
    ));

  return (
    <div className="player-families circle-container">
      {renderPlayerFamilies(familyImages)}
    </div>
  );
}

export default PlayerFamilies;
