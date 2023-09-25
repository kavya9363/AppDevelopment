import React from "react";
import GeographyChart from "../../../assets/components/dashboard-components/GeographyChart";
import { Box } from "@mui/material";
import Header1 from "../../../assets/components/dashboard-components/Header1";
const Geography = () => {
  return (
    <Box m="20px" height="75vh" p="2px">
      <Header1 title="Line CHART" subtitle="simple line chart" />
      <GeographyChart />
    </Box>
  );
};

export default Geography;
