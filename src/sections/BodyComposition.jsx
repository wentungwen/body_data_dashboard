import React, { useState } from "react";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import bodyCompositionCriteria from "../data/bodyCompositionCriteria";

export default function BodyComposition({ data }) {
  const [displayDataKey, setDisplayDataKey] = useState("fat");
  const { water, muscle, fat, others } = data.bodyComposition;
  const { weight } = data.personalInfo;

  const weightValue = weight.value;
  const waterValue = water.value;
  const muscleValue = muscle.value;
  const fatValue = fat.value;
  const othersValue = weightValue - (waterValue + muscleValue + fatValue);

  const compositionAngle = (compValue, weightValue) =>
    Math.round((360 * compValue) / weightValue);

  const pieChartData = [
    {
      label: water.label,
      color: "#68BFED",
      angle: compositionAngle(waterValue, weightValue),
    },
    {
      label: muscle.label,
      color: "#89C756",
      angle: compositionAngle(muscleValue, weightValue),
    },
    {
      label: fat.label,
      color: "#FFBC10",
      angle: compositionAngle(fatValue, weightValue),
    },
    {
      label: others.label,
      color: "#9EA4A6",
      angle: compositionAngle(othersValue, weightValue),
    },
  ];

  const dataButtons = Object.entries(data.bodyComposition).map(
    ([key, value]) => {
      const fillColor = pieChartData.filter(
        (item) => item.label === value.label
      )[0].color;

      const buttonClassName = `mr-2 mb-1 p-3 flex flex-grow-1 flex-column ${
        key === displayDataKey ? "active" : ""
      }`;

      return (
        <button
          onClick={() => setDisplayDataKey(key)}
          key={key}
          className={buttonClassName}
        >
          <b>{value.label}</b>
          <div className="flex align-item-center">
            <svg viewBox="0 0 100 100" width="20" height="20">
              <circle cx="50" cy="50" r="40" fill={fillColor} />
            </svg>
            <span>{value.value} kg</span>
          </div>
        </button>
      );
    }
  );

  const displayCompositionDetails = (key, data) => {
    const percentage = ((data.value / weightValue) * 100).toFixed(1);
    console.log(weightValue, data.value )
    
    return (
      <>
        <div className="row mb-2">
          <div className="col">
            <small className="bold">Substance</small>
            <div className="display-4">{key}</div>
          </div>
          <div className="col">
            <small className="bold">Weight</small>
            <div className="display-4">{data.value} kg</div>
          </div>
          <div className="col">
            <small className="bold">Percent</small>
            <div className="display-4">{percentage} %</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-12">
            {/* Barchart data */}
            {bodyCompositionCriteria[key].ranges.length > 0 ? (
              <>
                <small className="bold">Condition</small>
                <BarChart
                  substanceData={percentage}
                  barChartCriteria={
                    bodyCompositionCriteria[data.label.toLowerCase()]
                  }
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="card body-composition-section">
      <div className="row">
        <h2>Body Composition</h2>
      </div>
      <div className="row">
        <h3>Body weight: {weight.value} kg </h3>
      </div>
      <div className="row">
        {/* pie chart */}
        <div className="col col-4 pie-col flex justify-content-center align-items-center">
          {PieChart(pieChartData)}
        </div>
        {/* details of selected components */}
        <div className="col col-8 pie-substance-col bg-light-gray pt-3 pb-6 rounded">
          <div>
            {displayCompositionDetails(
              displayDataKey,
              data.bodyComposition[displayDataKey]
            )}
          </div>
        </div>
      </div>
      {/* components button */}
      <div className="row mt-5">{dataButtons}</div>
    </div>
  );
}
