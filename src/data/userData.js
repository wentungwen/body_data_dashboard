const userData = {
  personalInfo: {
    name: "John Doe",
    age: 25,
    gender: "Male",
    height: 180,
    weight: 73,
    race: "white",
  },
  bodyComposition: {
    water: 49,
    muscle: 17,
    fat: 6,
    others: 1,
  },
  obesityAnalysis: {
    visceralFat: 23,
    metabolic: 2300,
    bmi: 25,
  },
  segmentalComposition: {
    arm: {
      right: {
        fat: 23,
        muscle: 10,
      },
      left: {
        fat: 4,
        muscle: 8,
      },
    },
    leg: {
      right: {
        fat: 8,
        muscle: 12,
      },
      left: {
        fat: 6,
        muscle: 10,
      },
    },
    trunk: {
      center: {
        fat: 7,
        muscle: 15,
      },
    },
  },
};

// rArmFat: 23,
// rArmMuscle: 10,
// rLegFat: 8,
// rLegMuscle: 12,
// lArmFat: 4,
// lArmMuscle: 8,
// lLegFat: 6,
// lLegMuscle: 10,
// trunkFat: 7,
// trunkMuscle: 15,

export default userData;
