import React from "react";
import QuadrantChart from "../components/QuadrantChart";

export default function BodyGraph({ data }) {
  return <div className="card">{QuadrantChart(data)}</div>;
}
