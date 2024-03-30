const obesityCriteria = {
  bmi: {
    unit: "kg/m²",
    ranges: [
      {
        label: "Poor",
        range: [14, 18],
        color: "#FF8170",
      },
      {
        label: "Good",
        range: [18, 25],
        color: "#89C756",
      },
      {
        label: "Average",
        range: [25, 30],
        color: "#FFBC10",
      },
      {
        label: "Poor",
        range: [30, 35],
        color: "#FF8170",
      },
    ],
  },
  metabolic: {
    unit: "kCals",
    ranges: [
      {
        label: "Poor",
        range: [1200, 1600],
        color: "#FF8170",
      },
      {
        label: "Average",
        range: [1600, 2000],
        color: "#FFBC10",
      },
      {
        label: "Good",
        range: [2000, 2400],
        color: "#89C756",
      },
      {
        label: "Excellent",
        range: [2400, 2600],
        color: "#68BFED",
      }
    ],
  },
  visceralFat: {
    unit: "cm2", 
    ranges: [
      {
        label: "Excellent",
        range: [10, 50],
        color: "#68BFED",
      },
      {
        label: "Good",
        range: [50, 100],
        color: "#89C756",
      },
      {
        label: "Average",
        range: [100, 130],
        color: "#FFBC10",
      },
      {
        label: "Poor",
        range: [130, 150],
        color: "#FF8170",
      },
    ],
  },
};

export default obesityCriteria;
