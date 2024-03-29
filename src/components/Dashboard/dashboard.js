import Stack from "@mui/material/Stack";
import LineGraph from "../charts/lineChart";
import PieGraph from "../charts/pieCharts";
import BarGraph from "../charts/barChart";
import { useEffect } from "react";

export default function Dashboard({ data }) {
  const totalAmount = () => {
    let sum = 0;
    data.map((i) => {
      sum = sum + parseInt(i.price);
    });

    return sum;
  };

  const maxAmount = () => {
    let newArray = [];
    data.map((i) => newArray.push(i.price));
    return Math.max.apply(null, newArray);
  };

  const minAmount = () => {
    let newArray = [];
    data.map((i) => newArray.push(i.price));
    return Math.min.apply(null, newArray);
  };

  const totalCostYearly = () => {
    const newMap = new Map();
    const yearList = [];

    data.map((i) => {
      const year = parseInt(i.date.split("/")[2]);

      if (yearList.includes(year)) {
        const currentPrice = newMap.get(year);
        newMap.set(year, currentPrice + i.price);
      } else {
        yearList.push(year);
        newMap.set(year, i.price);
      }
    });

    return newMap;
  };

  const yearlyMonthWiseCost = () => {
    const yearMap = new Map();

    data.forEach((item) => {
      const dateParts = item.date.split("/");
      const year = parseInt(dateParts[2]);
      const month = parseInt(dateParts[1]);
      const price = item.price;

      if (!yearMap.has(year)) {
        yearMap.set(year, new Map());
      }

      const monthMap = yearMap.get(year);

      if (!monthMap.has(month)) {
        monthMap.set(month, 0);
      }

      const currentPrice = monthMap.get(month);
      monthMap.set(month, currentPrice + price);
    });

    return yearMap;
  };

  const yearlyMonthWiseItems = () => {
    const yearMap = new Map();

    data.forEach((item) => {
      const dateParts = item.date.split("/");
      const year = parseInt(dateParts[2]);
      const month = parseInt(dateParts[1]);

      if (!yearMap.has(year)) {
        yearMap.set(year, new Map());
      }

      const monthMap = yearMap.get(year);

      if (!monthMap.has(month)) {
        monthMap.set(month, 0);
      }

      const currentCount = monthMap.get(month);
      monthMap.set(month, currentCount + 1);
    });

    return yearMap;
  };

  return (
    <div
      style={{
        marginTop: 35,
        height: "80vh",
        width: "88vw",
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={5}>
          <div
            style={{
              width: "18rem",
              height: "5rem",
              background: "#17202a",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "rgb(72, 201, 176)",
            }}
          >
            <b>{`Total Amount: ₹${totalAmount()}`}</b>
          </div>
          <div
            style={{
              width: "18rem",
              height: "5rem",
              background: "#17202a",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "rgb(72, 201, 176)",
            }}
          >
            <b>
              {`Avg. Daily Expense: ₹${parseInt(totalAmount() / data.length)}`}
            </b>
          </div>
          <div
            style={{
              width: "18rem",
              height: "5rem",
              background: "#17202a",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "rgb(72, 201, 176)",
            }}
          >
            <b>{`Max. Amount Paid: ₹${maxAmount()}`}</b>
          </div>
          <div
            style={{
              width: "18rem",
              height: "5rem",
              background: "#17202a",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "rgb(72, 201, 176)",
            }}
          >
            <b>{`Min. Amount Paid: ₹${minAmount()}`}</b>
          </div>
        </Stack>
        <Stack direction="row" spacing={5}>
          <div
            style={{
              width: "45rem",
              height: "33rem",
              background: "white",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(5.4px)",
              WebkitBackdropFilter: "blur(5.4px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BarGraph yearlyMonthWiseCost={yearlyMonthWiseCost()} />
          </div>
          <Stack spacing={1.5}>
            <div
              style={{
                width: "32rem",
                height: "16rem",
                background: "white",
                borderRadius: 16,
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(5.4px)",
                WebkitBackdropFilter: "blur(5.4px)",
                border: "1px solid rgba(255, 255, 255, 0.17)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PieGraph totalCostYearly={totalCostYearly()} />
            </div>
            <div
              style={{
                width: "32rem",
                height: "16rem",
                background: "white",
                borderRadius: 16,
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(5.4px)",
                WebkitBackdropFilter: "blur(5.4px)",
                border: "1px solid rgba(255, 255, 255, 0.17)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LineGraph yearlyMonthWiseItems={yearlyMonthWiseItems()} />
            </div>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
