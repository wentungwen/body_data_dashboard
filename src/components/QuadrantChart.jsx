import React from "react";
import {
  MuscularBodyIcon,
  SkinnyBodyIcon,
  SolidlyBuildBodyIcon,
  HiddenObeseBodyIcon,
  AverageBodyIcon,
  StarIcon,
} from "../assets/BodyGraphIcons";

export default function QuadrantChart({ data }) {
  return (
    <div className="quadrant-chart-section">
      <div className="quadrant-chart">
        {/* Quadrant labels  */}
        <div className="label top">+ muscle</div>
        <div className="label bottom">- muscle</div>
        <div className="label left">+ fat</div>
        <div className="label right">- fat</div>

        {/* X and Y axis lines  */}
        <div className="axis x-axis"></div>
        <div className="axis y-axis"></div>

        {/* Icons in the four corners  */}
        <div className="icon top-left">
          <span>
            <SolidlyBuildBodyIcon />
          </span>
        </div>
        <div className="icon top-right">
          <span className="flex justify-content-end">
            <MuscularBodyIcon />
          </span>
        </div>
        <div className="icon bottom-left">
          <span>
            <HiddenObeseBodyIcon />
          </span>
        </div>
        <div className="icon bottom-right">
          <span className="flex justify-content-end">
            <SkinnyBodyIcon />
          </span>
        </div>

        {/* Icon in the center  */}
        <div className="icon center">
          <span className="centered-icon">
            <AverageBodyIcon />
          </span>
        </div>

        <div className="health-condition">
          <StarIcon />
        </div>
      </div>
    </div>
  );
}
