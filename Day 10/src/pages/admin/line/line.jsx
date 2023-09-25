import React from "react";
import LineChart from "../../../assets/components/dashboard-components/LineChart";
import { Box } from "@mui/material";
import Header1 from "../../../assets/components/dashboard-components/Header1";
const Line = () => {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px" height="75vh" p="2px">
      <Header1 title="Line CHART" subtitle="simple line chart" />
      <LineChart />
    </Box>
  );
};

export default Line;
