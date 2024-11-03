import React from "react";
import { PageContainer } from "../../components/layout/PageContainer";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts";
import { TIAONG_BRGY } from "../../utils/constant";
import { Stack } from "@mui/material";
const Dashboard = () => {
  const s = TIAONG_BRGY.map((v, i) => ({
    id: i,
    value: Math.ceil(Math.random() * 100),
    label: v,
  }));

  console.log("s");
  console.log(s);
  return (
    <PageContainer titleText="Dashboard" subText="Dashboard">
      {/* <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      /> */}
      <Stack width={"100%"} height={"100%"}>
        <PieChart
          series={[
            {
              data: [
                { value: 45, label: "Livestock", id: 1 },
                { value: 23, label: "Mortality", id: 2 },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 20, additionalRadius: -30, color: "gray" },
              innerRadius: 30,
              cornerRadius: 5,
              startAngle: -180,
              endAngle: 360,
              paddingAngle: 3,
              valueFormatter: (params) =>
                `${params.value} ${
                  params.value > 1 ? "violators" : "violator"
                }`,
            },
          ]}
        />
      </Stack>
    </PageContainer>
  );
};

export default Dashboard;
