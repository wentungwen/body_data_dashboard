import React from "react";
import BarChart from "../components/BarChart";
import obesityCriteria from "../data/obesityCriteria";

export default function Obesity({ data }) {
  const obesityData = data.obesityAnalysis;
  const height = data.personalInfo.height.value;
  const weight = data.personalInfo.weight.value;

  // add the calculated BMI data
  obesityData["bmi"] = {
    value: Math.round(weight / (height / 100) ** 2, 2),
    label: "BMI",
  };

  const obesityDetails = Object.entries(obesityData).map(([key, content]) => {
    const value = content.value;
    const label = content.label;
    return (
      <div className="row my-6" key={key}>
        <div className="col col-3 obesity-label m-0">
          <div className="label">{label}</div>
          <div className="display-3">{value}
          <span className="display-6 ml-1">{obesityCriteria[key].unit}</span> </div>
        </div>
        <div className="col col-9 obesity-barchart m-0">
          {" "}
          <BarChart
            substanceData={value}
            barChartCriteria={obesityCriteria[key]}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="card obesity-section">
        <h2>Obesity Analysis</h2>
        {obesityDetails}
      </div>
    </>
  );
}
