import React, { useContext, useCallback } from "react";
import { MdClose } from "react-icons/md";
import { userDataContext } from "../contexts/userDataContext";

function Sidebar({ onClose }) {
  const { data, mappedData, updateData } = useContext(userDataContext);
  const toCaptaliseWord = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const handleCompChange = (key, type, e) => {
    e.preventDefault();
    const newValue = Number(e.target.value);
    const newData = { ...data };
    newData[type][key] = newValue;
    updateData(newData);
  };

  const handleSegChange = useCallback(
    (key, comp, e, side) => {
      e.preventDefault();
      const newValue = Number(e.target.value);
      const newData = { ...data };
      newData.segmentalComposition[key][side][comp] = newValue;
      updateData(newData);
    },
    [data, updateData]
  );

  const showCompData = (data, type) => {
    return Object.entries(data[type]).map(([key, value]) => {
      console.log(key);
      return (
        key !== "bmi" && (
          <div className="input-group" key={key}>
            <label>{value.label}</label>
            <input
              min="0"
              type="number"
              value={value.value || ""}
              onChange={(e) => handleCompChange(key, type, e)}
            />
          </div>
        )
      );
    });
  };

  const showSegmentalData = (subData) => {
    return Object.entries(subData).map(([key, value]) => {
      const segLabel = value.label;
      const segValue = value.value;
      return (
        <div key={key} className="segment-section">
          {Object.entries(segValue).map(([side, data]) => (
            <div className="side" key={side}>
              <div className="side-text">
                {toCaptaliseWord(side)} {segLabel}
              </div>
              <div className="input-group">
                <label htmlFor="">Fat</label>
                <input
                  min="0"
                  type="number"
                  value={data.fat || ""}
                  onChange={(e) => handleSegChange(key, "fat", e, side)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="">Muscle</label>
                <input
                  min="0"
                  type="number"
                  value={data.muscle || ""}
                  onChange={(e) => handleSegChange(key, "muscle", e, side)}
                />
              </div>
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-close">
        <MdClose className="sidebar-close-btn" onClick={onClose} />
      </div>

      {/* Body Composition */}
      <div className="sidebar-section">
        <h2>Body Composition (kg)</h2>
        <div className="sidebar-content">
          {showCompData(mappedData, "bodyComposition")}
        </div>
      </div>

      {/* Obesity */}
      <div className="sidebar-section">
        <h2>Obesity Analysis</h2>
        <div className="sidebar-content">
          {showCompData(mappedData, "obesityAnalysis")}
        </div>
      </div>

      {/* Segmental Composition */}
      <div className="sidebar-section">
        <h2>Segmental Composition (kg)</h2>
        <div className="sidebar-content segment">
          {showSegmentalData(mappedData.segmentalComposition)}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
