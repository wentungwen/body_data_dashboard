import React from "react";
import {
  MuscularBodyIcon,
  SkinnyBodyIcon,
  SolidlyBuildBodyIcon,
  HiddenObeseBodyIcon,
  AverageBodyIcon,
} from "../assets/BodyGraphIcons";
import criteriaData from "../data/criteriaData";

const getAgeRange = (age) => {
  if (age <= 18) {
    return "teen";
  } else if (age <= 65) {
    return "middleAge";
  } else {
    return "senior";
  }
};

const generatedResults = (data) => {
  const gender = data.personalInfo.gender.value;
  const weight = data.personalInfo.weight.value;
  const musclePercentage = Math.round(
    data.bodyComposition.muscle.value / weight
  );
  const fatPercentage = data.bodyComposition.fat.value;

  const criteria = criteriaData[gender.toLowerCase()];

  const muscleCriteria = criteria.musclePercentage;
  const fatCriteria = criteria.fatPercentage;

  // Determine the muscle and fat result categories based on criteria
  let muscleResult, fatResult;

  if (musclePercentage >= muscleCriteria.q3) {
    muscleResult = "High";
  } else if (musclePercentage >= muscleCriteria.q2) {
    muscleResult = "Medium";
  } else {
    muscleResult = "Low";
  }

  if (fatPercentage <= fatCriteria.q1) {
    fatResult = "Low";
  } else if (fatPercentage <= fatCriteria.q2) {
    fatResult = "Medium";
  } else {
    fatResult = "High";
  }

  // Calculate the score based on muscle and fat results
  let score = 0;
  if (muscleResult === "High" && fatResult === "Low") {
    score = 100;
  } else if (muscleResult === "Medium" && fatResult === "Low") {
    score = 80;
  } else if (muscleResult === "Low" && fatResult === "Low") {
    score = 60;
  } else {
    score = 40;
  }

  // Define the resultTitle, nextGoal, and suggestion based on the score
  let resultTitle, nextGoal, suggestion, displayIcon;

  if (score >= 80) {
    resultTitle = "Good job, your body is muscular!";
    nextGoal = "Gain 0.9 kg muscle and lose 1.4 kg fat.";
    suggestion =
      "Your body is very muscular and healthy, but there’s room for improvement by gaining more muscle. Keep striving for progress!";
    displayIcon = <MuscularBodyIcon />;
  } else if (score >= 60) {
    resultTitle = "You're doing well, but there's room for improvement.";
    nextGoal = "Gain 1.2 kg muscle and lose 1.8 kg fat.";
    suggestion =
      "Your body is somewhat muscular and healthy, but there’s room for improvement by gaining more muscle and losing a bit more fat. Keep working towards your fitness goals!";
    displayIcon = <AverageBodyIcon />;
  } else {
    resultTitle = "You might need to focus on building muscle and losing fat.";
    nextGoal = "Gain 1.5 kg muscle and lose 2.2 kg fat.";
    suggestion =
      "Your body needs more muscle and less fat to reach a healthier state. Focus on strength training exercises and a balanced diet to achieve your fitness goals.";
    displayIcon = <SkinnyBodyIcon />;
  }

  return { score, resultTitle, nextGoal, suggestion, displayIcon };
};

export default function GeneralInfo({ data }) {
  const { score, resultTitle, nextGoal, suggestion, displayIcon } =
    generatedResults(data);

  return (
    <div className="card general-info-section">
      <h1>{resultTitle}</h1>
      <div className="row">
        <div className="col col-3 flex justify-content-center align-items-center">
          {displayIcon}
        </div>
        <div className="col col-9 flex flex-wrap bg-light-gray rounded p-3">
          <div className="col mb-3">
            <b>Your score</b>
            <div>
              <span className="display-1 bold mr-1">{score}</span>/ 100
            </div>
          </div>
          <div className="col">
            <b>Next goal</b>
            <div>{nextGoal}</div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <b className="mb-1">Suggestion</b>
        <div>{suggestion}</div>
      </div>
    </div>
  );
}
