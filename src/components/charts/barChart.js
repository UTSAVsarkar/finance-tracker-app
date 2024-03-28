import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

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

export default function BarGraph({ yearlyMonthWiseCost }) {
  const createData = () => {
    const yearlyData = yearlyMonthWiseCost;

    const data = [];
    yearlyData.forEach((monthMap, year) => {
      const arr = Array.from({ length: 12 }, () => 0);

      monthMap.forEach((price, month) => {
        arr[month - 1] += price;
      });

      data.push({
        data: arr,
        label: `${year} month wise cost`,
        id: year,
        stack: "total",
      });
    });

    return data;
  };

  return (
    <BarChart
      series={createData()}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
