import React from "react";
import {
  IconLevelPerfect,
  IconLevelOk,
  IconLevelGood,
  IconLevelPoor,
} from "../assets/SegIcons";

export default function BarChart({ substanceData, barChartCriteria }) {
  const barChartRangeCriteria = barChartCriteria.ranges;
  // Calculate the position based on the whole range
  const wholeMin = barChartRangeCriteria[0].range[0];
  const wholeMax =
    barChartRangeCriteria[barChartRangeCriteria.length - 1].range[1];

  // generate the scale blocks with relative width
  const scales = Object.entries(barChartRangeCriteria).map(([key, value]) => {
    const [scaleMin, scaleMax] = value.range;
    const width = ((scaleMax - scaleMin) * 100) / (wholeMax - wholeMin);
    const styleBar = {
      width: `${width}%`,
      height: "30px",
      backgroundColor: value.color,
      position: "relative",
    };

    return (
      <div key={key} className="scale-bar" style={styleBar}>
        <small className="scale-label">{value.range[0]}</small>
      </div>
    );
  });

  const styledIcon = (substanceDataValue) => {
    // if the value is within the range, then return iconLabel and position
    let iconLabel, iconPosition;
    Object.entries(barChartRangeCriteria).forEach(([key, value]) => {
      const [min, max] = value.range;
      if (substanceDataValue >= min && substanceDataValue <= max) {
        iconLabel = value.label;
        iconPosition =
          ((substanceDataValue - wholeMin) / (wholeMax - wholeMin)) * 100;
      }
    });

    // Handle case exceeds the max range
    if (
      substanceDataValue >
      barChartRangeCriteria[barChartRangeCriteria.length - 1].range[1]
    ) {
      iconLabel = barChartRangeCriteria[barChartRangeCriteria.length - 1].label;
      iconPosition = 100;
    }

    // Handle case lower the min range
    if (substanceDataValue < barChartRangeCriteria[0].range[0]) {
      iconLabel = barChartRangeCriteria[0].label;
      iconPosition = 0;
    }

    let iconComponent;
    switch (iconLabel) {
      case "Excellent":
        iconComponent = <IconLevelPerfect />;
        break;
      case "Good":
        iconComponent = <IconLevelGood />;
        break;
      case "Average":
        iconComponent = <IconLevelOk />;
        break;
      case "Poor":
        iconComponent = <IconLevelPoor />;
        break;
      default:
        iconComponent = <IconLevelPerfect />;
    }

    const style = {
      transform: `translateX(calc(${iconPosition}% - 10px))`,
    };

    return (
      <div className="target-icon" style={style}>
        {" "}
        {iconComponent}
      </div>
    );
  };

  return (
    <div className="bar-chart">
      {styledIcon(substanceData, barChartRangeCriteria)}

      <div className="bar-label flex"> {scales}</div>
    </div>
  );
}
