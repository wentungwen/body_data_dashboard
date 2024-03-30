import React from "react";

export default function PersonalInfo({ data }) {
  const personalData = data.personalInfo;

  return (
    <div className="personal-info-section card">
      <h2>Personal Info</h2>
      <ul>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key}>
            <b className="mr-2"> {value.label}:</b>
            {value.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
