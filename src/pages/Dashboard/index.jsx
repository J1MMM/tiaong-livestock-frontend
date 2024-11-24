import React from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart, PieChart } from "@mui/x-charts";
import { TIAONG_BRGY } from "../../utils/constant";
import { Box, Stack } from "@mui/material";
import useData from "../../hooks/useData";
const Dashboard = () => {
  const { yearlyRecordsData } = useData();

  const livestockData = [
    2400, 1398, 9800, 3908, 4800, 3800, 4300, 5400, 8398, 9800, 4908, 4800,
  ];
  const mortalityData = [
    4000, 3000, 2000, 2780, 1890, 2390, 3490, 1233, 2342, 4564, 3453, 3455,
  ];
  const xLabels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <PageContainer
      titleText="Yearly Records"
      subText="Overview of records for the entire year."
    >
      {yearlyRecordsData && (
        <LineChart
          series={[
            {
              data: yearlyRecordsData?.livestockData,
              label: "Livestock",
              curve: "linear",
            },
            {
              data: yearlyRecordsData?.mortalityData,
              label: "Mortality",
              curve: "linear",
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: xLabels,
            },
          ]}
        />
      )}
    </PageContainer>
  );
};

export default Dashboard;
