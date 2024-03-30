const bodyCompositionCriteria = {
  water: {
    unit: "%",
    ranges: [
      {
        label: "Poor",
        range: [0, 30],
        color: "#FF8170",
      },
      {
        label: "Average",
        range: [30, 45],
        color: "#FFBC10",
      },
      {
        label: "Good",
        range: [45, 100],
        color: "#89C756",
      },
    ],
  },
  fat: {
    unit: "%",
    ranges: [
      {
        label: "Excellent",
        range: [5, 12],
        color: "#68BFED",
      },
      {
        label: "Good",
        range: [12, 20],
        color: "#89C756",
      },
      {
        label: "Average",
        range: [20, 25],
        color: "#FFBC10",
      },
      {
        label: "Poor",
        range: [25, 35],
        color: "#FF8170",
      },
    ],
  },
  muscle: {
    unit: "%",
    ranges: [
      {
        label: "Poor",
        range: [15, 25],
        color: "#FF8170",
      },
      {
        label: "Average",
        range: [25, 35],
        color: "#FFBC10",
      },
      {
        label: "Good",
        range: [35, 40],
        color: "#89C756",
      },
      {
        label: "Excellent",
        range: [40, 50],
        color: "#68BFED",
      },
    ],
  },
  others: {
    unit: "",
    ranges: [],
  },
};

export default bodyCompositionCriteria;
