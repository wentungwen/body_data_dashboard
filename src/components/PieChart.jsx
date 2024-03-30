import React from "react";

export default function PieChart(pieChartData) {
  // mapping the data from { "angle": 226 } to { startAngle: 0, endAngle: 70 },
  const segments = pieChartData.map((segment, index, array) => {
    // Calculate the start angle by summing up the angles of previous segments
    const startAngle = array
      .slice(0, index)
      .reduce((accumulator, currentItem) => accumulator + currentItem.angle, 0); // 0 is the initial value
    const endAngle = startAngle + segment.angle;
    return { ...segment, startAngle, endAngle };
  });

  // change pie chart data
  const styleProportion = {
    backgroundImage: `conic-gradient(
          ${segments
            .map(
              (segment) =>
                `${segment.color} ${segment.startAngle}deg ${segment.endAngle}deg`
            )
            .join(", ")}
        )`,
  };
  return (
    <div className="piechart-container">
      <div className="piechart" style={styleProportion}></div>
    </div>
  );
}
