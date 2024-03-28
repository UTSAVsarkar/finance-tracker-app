import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieGraph({ totalCostYearly }) {
  const createData = () => {
    const data = [];
    totalCostYearly.forEach((value, key) => {
      data.push({
        id: key,
        value: value,
        label: `Year ${key}`,
      });
    });

    return data;
  };

  return (
    <PieChart
      series={[
        {
          data: createData(),
        },
      ]}
    />
  );
}
