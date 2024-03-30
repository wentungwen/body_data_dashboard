import React, { createContext, useState, useEffect } from "react";
import userData from "../data/userData";
import labelMappings from "../data/labbelMappings";
import { generateMappedData, calculateWeight } from "../utils/dataUtils";


const userDataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(userData);
  const [mappedData, setMappedData] = useState(() =>
    generateMappedData(userData, labelMappings)
  );
  useEffect(() => {
    setMappedData(generateMappedData(data, labelMappings));
  }, [data]);

  const updateData = (newData) => {
    const newWeight = calculateWeight(newData.bodyComposition)
    const updatedData = {...newData}
    updatedData.personalInfo.weight = newWeight
    setData(updatedData);
  };


  return (
    <userDataContext.Provider value={{ data, mappedData, updateData }}>
      {children}
    </userDataContext.Provider>
  );
};

export { userDataContext, DataProvider };
