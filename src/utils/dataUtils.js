const generateMappedData = (data, labelMappings) => {
  // map the label data inside the userData.
  const mappedData = {};
  Object.entries(data).forEach(([key, value]) => {
    if (labelMappings[key]) {
      mappedData[key] = {};
      Object.entries(value).forEach(([subkey, subvalue]) => {
        // if empty labels, use the original data
        const label = labelMappings[key][subkey] || subkey;
        // ensure to set a empty obj, otherwise it will cause error
        mappedData[key][subkey] = {
          value: subvalue,
          label: label,
        };
      });
    }
  });
  return mappedData;
};

// Function to calculate weight based on body composition
const calculateWeight = (bodyComposition) => {
  const { water, muscle, fat, others } = bodyComposition;
  const weight = water + muscle + fat + others;
  return weight;
};


export { generateMappedData, calculateWeight };
