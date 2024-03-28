import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const dataset = [
  {
    price: 21,
    month: "Jan",
  },
  {
    price: 28,
    month: "Fev",
  },
  {
    price: 41,
    month: "Mar",
  },
  {
    price: 73,
    month: "Apr",
  },
  {
    price: 99,
    month: "May",
  },
  {
    price: 144,
    month: "June",
  },
  {
    price: 319,
    month: "July",
  },
  {
    price: 249,
    month: "Aug",
  },
  {
    price: 131,
    month: "Sept",
  },
  {
    price: 55,
    month: "Oct",
  },
  {
    price: 48,
    month: "Nov",
  },
  {
    price: 25,
    month: "Dec",
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function BarGraph() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        {
          dataKey: "price",
          label: "Month vs Total Cost",
          valueFormatter,
          color: "rgb(72, 201, 176)",
        },
      ]}
      layout="horizontal"
      colors={["rgb(72, 201, 176)"]}
    />
  );
}
