import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

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

export default function LineGraph({ yearlyMonthWiseItems }) {
  const createData = () => {
    const yearlyData = yearlyMonthWiseItems;
    const data = [];
    yearlyData.forEach((monthMap, year) => {
      const arr = Array.from({ length: 12 }, () => 0);
      monthMap.forEach((count, month) => {
        arr[month - 1] += count;
      });
      data.push({
        data: arr,
        label: `${year} month wise items`,
      });
    });

    return data;
  };

  return (
    <LineChart
      series={createData()}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
