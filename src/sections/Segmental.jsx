import React, { useState } from "react";
import { IconLevelGood } from "../assets/SegIcons";
import { FaCheck } from "react-icons/fa6";

export default function Segmental({ data }) {
  const [isIconShown, setIsIconShown] = useState(true);
  const [activeCompositions, setActiveCompositions] = useState({
    fat: true,
    muscle: true,
  });
  const [unit, setUnit] = useState("%");

  const weight = data.personalInfo.weight.value;

  const segmentalData = data.segmentalComposition;

  const limbsComponent = (title, value) => {
    const toPercent = (portion, total) => Math.round((portion / total) * 100);
    return (
      <div className="limbs">
        <h4 className="limbs-title">{title}</h4>
        <div className="limbs-title_icon mb-1">
          {activeCompositions["fat"] && (
            <>
              {isIconShown && <IconLevelGood />}
              Fat {unit === "%" ? toPercent(value.fat, weight) : value.fat}
              {unit}
            </>
          )}
        </div>
        <div className="limbs-title_icon mb-1">
          {activeCompositions["muscle"] && (
            <>
              {isIconShown && <IconLevelGood />}
              Muscle{" "}
              {unit === "%" ? toPercent(value.muscle, weight) : value.muscle}
              {unit}
            </>
          )}
        </div>
      </div>
    );
  };

  const handleButtonClick = (btnType) => {
    if (btnType === "fat" || btnType === "muscle") {
      setActiveCompositions((prev) => ({
        ...prev,
        [btnType]: !prev[btnType],
      }));
    } else if (btnType === "%" || btnType === "kg") {
      setUnit(btnType);
    } else {
      console.log("error");
    }
  };

  const settingCompButtons = (type) => {
    return (
      <button
        className={`setting-button secondary-button ${
          activeCompositions[type] ? "active" : ""
        }`}
        onClick={() => handleButtonClick(type)}
      >
        {activeCompositions[type] ? <FaCheck /> : ""}
        {type}
      </button>
    );
  };

  const settingUnitButtons = (type) => {
    return (
      <button
        className={`setting-button secondary-button ${
          unit === type ? "active" : ""
        }`}
        onClick={() => handleButtonClick(type)}
      >
        {type === "%" ? "Percent (%)" : "Kilo (kg)"}
      </button>
    );
  };

  return (
    <div className="card segment-section mb-4">
      <h2>Segmental Analysis</h2>
      <div className="row">
        <div className="col col-8 body-icon">
          <div className="col-4">
            {limbsComponent("Left Arm", segmentalData.arm.value.left)}
            {limbsComponent("Left Leg", segmentalData.leg.value.left)}
          </div>
          <div className="col-4 trunk">
            {limbsComponent("Trunk", segmentalData.trunk.value.center)}
          </div>
          <div className="col-4">
            {limbsComponent("Right Arm", segmentalData.arm.value.right)}
            {limbsComponent("Right Leg", segmentalData.leg.value.right)}
          </div>
        </div>
        <div className="col col-4 setting p-4 rounded">
          <div className="pb-1">Adjust the settings to explore!</div>
          <div className="my-2">
            <h3>Compositions</h3>
            <div>
              {settingCompButtons("fat")}
              {settingCompButtons("muscle")}
            </div>
          </div>
          <div className="my-2">
            <h3>Units</h3>
            <div>
              {settingUnitButtons("%")}
              {settingUnitButtons("kg")}
            </div>
          </div>
          <div className="flex my-2">
            <input
              type="checkbox"
              name="showIcons"
              id="showIcons"
              className="mr-2"
              onChange={() => setIsIconShown(!isIconShown)}
            />
            <label htmlFor="showIcons">Show Icons</label>
          </div>
        </div>
      </div>
    </div>
  );
}
