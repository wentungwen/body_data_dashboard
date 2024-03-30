const segmentalCriteria = {
  armMuscle: {
    unit: "kg",
    ranges: [
      {
        label: "Poor",
        range: [15, 18],
        color: "#FF8170",
      },
      {
        label: "Excellent",
        range: [18, 25],
        color: "#68BFED",
      },
      {
        label: "Good",
        range: [25, 30],
        color: "#89C756",
      },
      {
        label: "Poor",
        range: [30, 35],
        color: "#FF8170",
      },
    ],
  },
  armFat: {
    unit: "kg", 
    ranges: [
      {
        label: "Excellent",
        range: [0, 12],
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
        range: [25, 60],
        color: "#FFBC10",
      },
    ],
  },
  legMuscle: {
    unit: "kg", 
    ranges: [
      {
        label: "Excellent",
        range: [0, 12],
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
        range: [25, 40],
        color: "#FFBC10",
      },
    ],
  },
  legFat: {
    unit: "kg", 
    ranges: [
      {
        label: "Excellent",
        range: [0, 12],
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
        range: [25, 40],
        color: "#FFBC10",
      },
    ],
  },
  trunk: {
    unit: "kg", 
    ranges: [
      {
        label: "Excellent",
        range: [0, 12],
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
        range: [25, 40],
        color: "#FFBC10",
      },
    ],
  },
};

export default segmentalCriteria;
