import React from "react";
import "./FamilySelector.css";

function FamilySelector({ familiesLogo, familyImages, setfamilyImages }) {
  const maxImg = 3;
  const addFamily = family => {
    if (familyImages.length < maxImg) {
      setfamilyImages([...familyImages, familiesLogo[family]]);
    }
  };
  return (
    <select
      onChange={({ target: { value } }) => addFamily(value)}
      className="button family-selector"
    >
      {Object.keys(familiesLogo).length &&
        Object.keys(familiesLogo).map(family => (
          <option
            key={family}
            value={family}
            className="family-selector--option"
          >
            {family}
          </option>
        ))}
    </select>
  );
}

export default FamilySelector;
