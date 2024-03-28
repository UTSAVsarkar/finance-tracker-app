import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const pData = [20, 18, 98, 30, 40, 30, 40, 40, 40, 40, 40, 40];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function LineGraph() {
  return (
    <LineChart
      series={[
        {
          data: pData,
          label: "Month vs No. of Items",
          color: "rgb(72, 201, 176)",
          area: true,
        },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
